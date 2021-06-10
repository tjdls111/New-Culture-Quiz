import {Quiz,main,buttonStart} from "./quiz/quiz.js";

export let quiz_num:number=0;

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
                const quiz=new Quiz(`${quizs[quiz_num].quiz}`,`${quizs[quiz_num].answer}`);
                quiz_num++;
            }
        };
}

export function addQuizNum(){
    quiz_num++;
}

export const quizs=
[
    {

        "quiz":"사람들은 하늘의 전기바람은 비구름을 말리고 땅의 이것은 땅 위의 물을 말린다.고 하네요. 사람들은 이것을 덕진풍, 전어기, 덕률풍이라고 부릅니다. 이 물건에서 나는 찌익찌익 소리를 듣고 귀신 들렸다면서 무서워하기도 했어요.",
        "answer":"전화기"
    },

    {

        "quiz":"이것을 구경하기 위해 멀리서 오고, 돈을 쏟아 붓는 사람도 있었대요. '쇠수레'라는 별명을 가지고 있어요.'",
        "answer":"전차"
    },
    {

        "quiz":"이것은 많은 곳에 사용돼요. 나타나지 않을 때는 소리도 빛도 무게도 없어요. 소식을 전해줄 수도 있고, 물건 만드는 데 쓸 수도 있어요.",
        "answer":"전기"
    }

]