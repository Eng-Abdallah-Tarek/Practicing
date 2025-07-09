const form=document.querySelector('.SignForm');
const signPage=document.querySelector('.sign-up')
const success=document.querySelector('.success-message');

form.addEventListener('submit',function(event){
    event.preventDefault();
    signPage.style.display='none';
    success.style.display='flex';
})