import { clickBtn } from "../button.js";
export var main = document.querySelector('#game-zone');
export var buttonStart = document.querySelector('.button-start');
var Quiz = /** @class */ (function () {
    function Quiz(quiz) {
        var quizZone = document.createElement('div');
        quizZone.innerHTML = "<section class=\"quiz-box\">\n        <button class=\"close\">&times;</button>\n        <div id=\"quiz-box_body\">" + quiz + "</div>\n        <button class=\"quiz_submit\">\uC815\uB2F5 \uD655\uC778\uD558\uAE30</button>\n    </section>\n        ";
        main === null || main === void 0 ? void 0 : main.appendChild(quizZone);
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
    return Quiz;
}());
export { Quiz };
var startButton = document.querySelector('main');
startButton === null || startButton === void 0 ? void 0 : startButton.addEventListener('click', function (event) {
    clickBtn(event);
});
