export function clickBtn(event) {
    if (event.target) {
        if (event.target.className == 'menu-one') {
            location.href = 'des.html';
        }
        else if (event.target.className == 'menu-two') {
            location.href = 'quiz.html';
        }
    }
    ;
}