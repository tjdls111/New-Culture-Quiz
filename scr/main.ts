type html=null|HTMLElement;

const menu:html=document.querySelector('.menu');
const desBtn:html=document.querySelector('.menu-one');
const quizBtn:html=document.querySelector('.menu-two');

menu?.addEventListener('click',(event:MouseEvent)=>{
    if (event.target){
        if (event.target.className=='menu-one'){
           location.href='des.html';
        }
        else if (event.target.className=='menu-two'){
            location.href='quiz.html';
        }
    }

    
});
