import { clickBtn } from "./button.js";
var menu = document.querySelector('.menu');
menu === null || menu === void 0 ? void 0 : menu.addEventListener('click', function (event) {
    clickBtn(event);
});
