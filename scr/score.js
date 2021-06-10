import { main } from "./quiz/quiz.js";
var score = 0;
export function rememberScore(getScore) {
    if (getScore == true) {
        score++;
    }
}
export function showScore() {
    var scoreZone = document.createElement('div');
    scoreZone.innerHTML = "<section class=\"score-box\">\n    <button class=\"close\">&times;</button>\n    <div id=\"score-box_body\">\uC218\uACE0\uD558\uC168\uC5B4\uC694~ \uD83E\uDD73<br> \uC138 \uBB38\uC81C \uC911 " + score + "\uBB38\uC81C\uB97C \uB9DE\uCDC4\uC2B5\uB2C8\uB2E4! </div>\n</section>\n    ";
    main === null || main === void 0 ? void 0 : main.appendChild(scoreZone);
    var closeBtn = scoreZone.querySelector('.close');
    closeBtn.onclick = function (event) {
        main === null || main === void 0 ? void 0 : main.removeChild(scoreZone);
        location.href = 'index.html';
    };
}
