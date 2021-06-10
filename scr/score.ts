import { main } from "./quiz/quiz.js";


let score:number=0;

export function rememberScore(getScore:boolean):void{
    if (getScore==true){
        score++;
    }
}

export function showScore(score:number):void{
    const scoreZone=document.createElement('div');
    scoreZone.innerHTML=`<section class="quiz-box">
    <button class="close">&times;</button>
    <div id="quiz-box_body">세 문제 중 ${score}문제를 맞췄습니다! 🥳</div>
</section>
    `;
    main?.appendChild(scoreZone);
}