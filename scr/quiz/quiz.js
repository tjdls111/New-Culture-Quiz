import { clickBtn, quizs, quiz_num, addQuizNum } from "../button.js";
import { rememberScore } from "../score.js";
export var main = document.querySelector('#game-zone');
export var buttonStart = document.querySelector('.button-start');
var Quiz = /** @class */ (function () {
    function Quiz(quiz, answer) {
        var quizZone = document.createElement('div');
        quizZone.innerHTML = "<section class=\"quiz-box\">\n        <button class=\"close\">&times;</button>\n        <div id=\"quiz-box_body\">" + quiz + "</div>\n        <input type=\"text\" class='quiz_answer'></input>\n        <button class=\"quiz_submit\">\uC815\uB2F5 \uD655\uC778\uD558\uAE30</button>\n    </section>\n        ";
        main === null || main === void 0 ? void 0 : main.appendChild(quizZone);
        var closeBtn = quizZone.querySelector('.close');
        closeBtn.onclick = function (event) {
            main === null || main === void 0 ? void 0 : main.removeChild(quizZone);
        };
        var submitBtn = quizZone.querySelector('.quiz_submit');
        var userAnswer = quizZone.querySelector('.quiz_answer');
        submitBtn.onclick = function () {
            if (userAnswer.value == answer) {
                rememberScore(true);
                main === null || main === void 0 ? void 0 : main.removeChild(quizZone);
                main === null || main === void 0 ? void 0 : main.classList.remove('quiz');
                nextQuiz();
            }
        };
    }
    return Quiz;
}());
export { Quiz };
function nextQuiz() {
    var quiz = new Quiz("" + quizs[quiz_num].quiz, "" + quizs[quiz_num].answer);
    addQuizNum();
}
var startButton = document.querySelector('main');
startButton === null || startButton === void 0 ? void 0 : startButton.addEventListener('click', function (event) {
    clickBtn(event);
});
