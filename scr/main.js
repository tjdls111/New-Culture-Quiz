"use strict";
var menu = document.querySelector('.menu');
var desBtn = document.querySelector('.menu-one');
var quizBtn = document.querySelector('.menu-two');
menu === null || menu === void 0 ? void 0 : menu.addEventListener('click', function (event) {
    if (event.target) {
        if (event.target.className == 'menu-one') {
            location.href = 'des.html';
        }
        else if (event.target.className == 'menu-two') {
            location.href = 'quiz.html';
        }
    }
});
