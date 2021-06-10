import { clickBtn } from "../button.js";

type html=null|HTMLElement;
export const main:html=document.querySelector('#game-zone');
export const buttonStart:html=document.querySelector('.button-start');

export class Quiz{

    constructor(quiz:string,answer:string){
        const quizZone=document.createElement('div');
        quizZone.innerHTML=`<section class="quiz-box">
        <button class="close">&times;</button>
        <div id="quiz-box_body">${quiz}</div>
        <input type="text" class='quiz_answer'></input>
        <button class="quiz_submit">정답 확인하기</button>
    </section>
        `;
  
        main?.appendChild(quizZone);

        const closeBtn=quizZone.querySelector('.close')! as HTMLElement;
        closeBtn.onclick=(event)=>{
            main?.removeChild(quizZone);
        };

        const submitBtn=quizZone.querySelector('.quiz_submit')! as HTMLElement;
        const userAnswer=quizZone.querySelector('.quiz_answer')! as HTMLElement;
        submitBtn.onclick=(event)=>{
            if(userAnswer.value==answer){
                console.log("answer!");
                
            }
            
        }
        
        

    }

}




const startButton:html=document.querySelector('main');


startButton?.addEventListener('click',(event:MouseEvent)=>{
   clickBtn(event);
});


