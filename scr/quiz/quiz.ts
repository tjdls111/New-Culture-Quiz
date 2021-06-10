import { clickBtn } from "../button.js";

type html=null|HTMLElement;
export const main:html=document.querySelector('#game-zone');
export const buttonStart:html=document.querySelector('.button-start');

export class Quiz{

    constructor(quiz:string){
        const quizZone=document.createElement('div');
        quizZone.innerHTML=`<section class="quiz-box">
        <button class="close">&times;</button>
        <div id="quiz-box_body">${quiz}</div>
        <button class="quiz_submit">정답 확인하기</button>
    </section>
        `;
  
        main?.appendChild(quizZone);
        console.log('quize');

        /*const closeBtn=template.querySelector('.close')! as HTMLElement;
        closeBtn.onclick=()=>{
            console.log('닫기');
            
        }
        const submitBtn=template.querySelector('.quiz_submit')! as HTMLElement;
        submitBtn.onclick=()=>{
            console.log('제출하기');
            
        };*/


        

    }

}




const startButton:html=document.querySelector('main');


startButton?.addEventListener('click',(event:MouseEvent)=>{
   clickBtn(event);
});


