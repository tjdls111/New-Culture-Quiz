import { main } from "./quiz/quiz.js";


let score:number=0;

export function rememberScore(getScore:boolean):void{
    if (getScore==true){
        score++;
    }
}

export function showScore():void{
    const scoreZone=document.createElement('div');
    scoreZone.innerHTML=`<section class="score-box">
    <button class="close">&times;</button>
    <div id="score-box_body">수고하셨어요~ 🥳<br> 세 문제 중 ${score}문제를 맞췄습니다! </div>
</section>
    `;
    main?.appendChild(scoreZone);

    const closeBtn=scoreZone.querySelector('.close')! as HTMLElement;
        closeBtn.onclick=(event)=>{
            main?.removeChild(scoreZone);
        };
}