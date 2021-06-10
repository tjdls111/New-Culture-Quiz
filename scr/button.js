import { Quiz, main, buttonStart } from "./quiz/quiz.js";
export var quiz_num = 0;
export function clickBtn(event) {
    if (event.target) {
        if (event.target.className == 'menu-one') {
            location.href = 'des.html';
        }
        else if (event.target.className == 'menu-two') {
            location.href = 'quiz.html';
        }
        else if (event.target.className == 'start') {
            main === null || main === void 0 ? void 0 : main.removeChild(buttonStart);
            var quiz = new Quiz("" + quizs[quiz_num].quiz, "" + quizs[quiz_num].answer, "" + quizs[quiz_num].description);
            quiz_num++;
        }
    }
    ;
}
export function addQuizNum() {
    quiz_num++;
}
export var quizs = [
    {
        "quiz": "사람들은 '하늘의 전기바람은 비구름을 말리고 땅의 이것은 땅 위의 물을 말린다.'라고 했대요. 이 물건에서 나는 찌익찌익 소리를 듣고 귀신 들렸다면서 무서워하기도 했어요. 사람들은 이것을 덕진풍, 전어기, 덕률풍이라고도 부릅니다. ",
        "answer": "전화기",
        "description": "[전화 예절] 당시 사람들은 머리를 단정히 하고 전화기 앞에서 인사를 한 후에야 전화를 받았어요. 자신의 이름, 맡은 직책, 조상을 말하고 상대 부서 관리들의 안부, 전화 받은 사람 부모의 안부까지 물은 후에 용건을 이야기했대요."
    },
    {
        "quiz": "이것을 구경하기 위해 멀리서 오고, 돈을 쏟아 붓는 사람도 있었대요. '쇠수레'라는 별명을 가지고 있어요.'",
        "answer": "전차",
        "description": "[고종의 조령] 방금 들으니 전차를 운행할 때, 백성들 중 다치고 죽은 사람이 많다고 하니 매우 놀라고 슬프다. 피해자들을 찾아내서 돈을 넉넉히 주어라. 그래서 나라에서 걱정하고 불쌍하게 여기는 것을 보여주어라. 관련 부서에서는 법을 만들어 보호하게 해라. 전차를 운전할 때는 반드시 사람들이 철길에 들어오지 않았는가 살펴서 다시는 차에 치어 다치는 폐단이 없게 하라.” -고종실록 39권, 고종 36년 5월 27일 양력 3번째 기사를 다듬음-"
    },
    {
        "quiz": "이것은 많은 곳에 사용돼요. 소식을 전해줄 수도 있고, 물건 만드는 데 쓸 수도 있어요. 빛을 낼 수도 있죠.",
        "answer": "전기",
        "description": "",
    },
    {
        "quiz": "'물불', '묘화', '건달불'이라는 별명을 가진 이것은 무엇일까요?",
        "answer": "전등",
        "description": "처음 설치되었을 때 경복궁 연못 물을 먹고 켜졌다고(수증기의 힘으로 전기 만듦) '물불', 묘한 불이라고 '묘화', 고치는 데 비용이 많이 든다고 '건달불'이라는 별명이 붙었다고 해요. ",
    },
];
export var quizNumber = quizs.length;
