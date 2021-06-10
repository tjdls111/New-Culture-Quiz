import { Quiz, main, buttonStart } from "./quiz/quiz.js";
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
            var quiz = new Quiz('어쩌구 저쩌구');
        }
    }
    ;
}
