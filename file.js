let btn=document.querySelector('.btn');
let bg=document.querySelector('body');

let color=['red','green','blue'];

btn.addEventListener('click',bgchange);

function bgchange(){
    let random=Math.floor(Math.random()*color.length);
    bg.style.backgroundColor=color[random];
}