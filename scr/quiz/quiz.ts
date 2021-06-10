type html=null|HTMLElement;
const main:html=document.querySelector('main');


export class Quiz{

    constructor(quiz:string){
        const template=document.createElement('template');
        template.innerHTML=`<section class="quiz-box">
        <button class="close">&times;</button>
        <div id="quiz-box_body">${quiz}</div>
        <button class="quiz_submit">정답 확인하기</button>
    </section>
        `;

        /*const closeBtn=template.querySelector('.close')! as HTMLElement;
        closeBtn.onclick=()=>{
            console.log('닫기');
            
        }
        const submitBtn=template.querySelector('.quiz_submit')! as HTMLElement;
        submitBtn.onclick=()=>{
            console.log('제출하기');
            
        };*/

        main?.appendChild(template);
    }

}

