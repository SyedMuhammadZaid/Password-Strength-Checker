let password = document.querySelector('input[type=password]');
let para = document.querySelector('p');
let msg = document.querySelector('.span');
let reset = document.querySelector('button');

let count = 0;

password.addEventListener('keypress',(event)=>{
    console.dir(event)
    if((event.keyCode>=48 && event.keyCode<=57) || (event.keyCode>=97 && event.keyCode<=122)){
        count = count + 1;

        if ((count>=1 && count<=5)) {
            password.style.border = '1px solid red'; 
            msg.innerHTML = "weak";
            para.style.display = "block"; 
            para.style.color = "red";

        }
    
        if ((count>=6) && (count<=8)){
            password.style.border = "1px solid yellow";
            msg.innerHTML = "medium";
            para.style.display = "block";
            para.style.color = "yellow";
            
        }

        if ((count>=9) && (count<=25)){
            password.style.border = "1px solid green";
            msg.innerHTML = "strong";
            para.style.display = "block";
            para.style.color = "green";
        }
     
    }

    else{
        alert("kindly enter password within alpha numeric values to check the strength of password.")
    }
  
})

reset.addEventListener('click',()=>{
    para.style.display = "none";
    password.style.border = "1px solid #ccc"
    password.value = "";
})



