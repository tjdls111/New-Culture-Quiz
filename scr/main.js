import { clickBtn } from "./button.js";
import { Quiz } from "./quiz/quiz.js";
var menu = document.querySelector('.menu');
menu === null || menu === void 0 ? void 0 : menu.addEventListener('click', function (event) {
    clickBtn(event);
});
var quiz = new Quiz('어쩌구 저쩌구');
