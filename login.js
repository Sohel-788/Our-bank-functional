document.getElementById('submitBtn').addEventListener('click',function(){
    const userEmail = document.getElementById('userEmail').value;
    const userPassword = document.getElementById('userPassword').value;
    if(userEmail=='abc@gmail.com' && userPassword==123456){
        window.location.href='banking.html';
    }
    else{
       return document.getElementById('hints').innerText='Please! input "abc@gmail.com" as email and "123456" as password.';
    }
})