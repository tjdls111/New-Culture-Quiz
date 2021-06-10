import {Quiz,main,buttonStart} from "./quiz/quiz.js";


export function clickBtn(event:MouseEvent){
        if (event.target){
            if (event.target.className=='menu-one'){
               location.href='des.html';
            }
            else if (event.target.className=='menu-two'){
                location.href='quiz.html';
            }
            else if (event.target.className=='start'){
                main?.removeChild(buttonStart);
                const quiz=new Quiz('어쩌구 저쩌구');
            }
        };
}
