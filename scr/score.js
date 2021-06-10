import { main } from "./quiz/quiz.js";
var score = 0;
export function rememberScore(getScore) {
    if (getScore == true) {
        score++;
    }
}
export function showScore(score) {
    var scoreZone = document.createElement('div');
    scoreZone.innerHTML = "<section class=\"quiz-box\">\n    <button class=\"close\">&times;</button>\n    <div id=\"quiz-box_body\">\uC138 \uBB38\uC81C \uC911 " + score + "\uBB38\uC81C\uB97C \uB9DE\uCDC4\uC2B5\uB2C8\uB2E4! \uD83E\uDD73</div>\n</section>\n    ";
    main === null || main === void 0 ? void 0 : main.appendChild(scoreZone);
}
