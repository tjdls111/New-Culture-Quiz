type html=null|HTMLElement;

const menu:html=document.querySelector('.menu');
const desBtn:html=document.querySelector('.menu-one');
const quizBtn:html=document.querySelector('.menu-two');

menu?.addEventListener('click',(event)=>{
    console.log(event);
    
});
