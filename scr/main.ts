import { clickBtn } from "./button.js";


type html=null|HTMLElement;

const menu:html=document.querySelector('.menu');


menu?.addEventListener('click',(event:MouseEvent)=>{
   clickBtn(event);
});

