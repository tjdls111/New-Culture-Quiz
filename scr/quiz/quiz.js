var main = document.querySelector('main');
var Quiz = /** @class */ (function () {
    function Quiz(quiz) {
        var template = document.createElement('template');
        template.innerHTML = "<section class=\"quiz-box\">\n        <button class=\"close\">&times;</button>\n        <div id=\"quiz-box_body\">" + quiz + "</div>\n        <button class=\"quiz_submit\">\uC815\uB2F5 \uD655\uC778\uD558\uAE30</button>\n    </section>\n        ";
        /*const closeBtn=template.querySelector('.close')! as HTMLElement;
        closeBtn.onclick=()=>{
            console.log('닫기');
            
        }
        const submitBtn=template.querySelector('.quiz_submit')! as HTMLElement;
        submitBtn.onclick=()=>{
            console.log('제출하기');
            
        };*/
        main === null || main === void 0 ? void 0 : main.appendChild(template);
    }
    return Quiz;
}());
export { Quiz };
