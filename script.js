'use strict!'
const form=document.querySelector('.SignForm');
const email=document.querySelector('.email');
const signPage=document.querySelector('.sign-up')
const success=document.querySelector('.success-message');
const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit',function(event){
    event.preventDefault();
    if(emailPattern.test(email.value.trim())){
    signPage.style.display='none';
    success.style.display='flex';
    signPage.classList.remove('active');
    document.querySelector('.success-message p span').textContent=email.value;
}
else{
signPage.classList.add('active');
}
})

email.addEventListener('input',function(){
    if(email.value=='')
        signPage.classList.remove('active');
 else if(!emailPattern.test(email.value.trim()))
    signPage.classList.add('active');
else signPage.classList.remove('active');
})
