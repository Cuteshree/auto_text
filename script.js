const typedText = document.querySelector(".type-text");
const cursor = document.querySelector(".cursor");

const words=["werid" ,"cool","famous","trending"];
const typingDelay = 200;
const erasingDelay = 200;
const newletterDelay = 2000;

let index = 0;
let charindex = 0;

 document.addEventListener("DOMContentLoader",()=>{
    if(words.length){
        selfTimeout(typedText,newletterDelay)
    }

 })


 function typedText(){
    if(charindex < words[index].length){
        typedText.textContent +=words[index].charAt(charindex);
        charindex++;
        setTimeout(typedText,typingDelay);
    }else{
        setTimeout(erase,newletterDelay);
    }
 }

 function erase(){
    if(charindex >0){
        typedText.textContent = words[index].substring(0,charindex -1);
        charindex--;
        setTimeout(erase,erasingDelay);
    }else{
        index++;
        if(index >= words.length){
            index = 0;
        }
        setTimeout(typedText,typingDelay + 1000)
        
    }
 }