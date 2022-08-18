'use strict';


// console.log(document.querySelector('.cls-eff').getTotalLength())

const monsterEl = document.querySelector('.react-mon')
const mousePosition = {
    x:0,
    y:0
}
const easeValue = 0.05

const monPosition = {
    x:0,
    y:0
}

document.addEventListener('mousemove',(event)=>{

    mousePosition.x = event.clientX - innerWidth * 0.5;
    mousePosition.y = event.clientY - innerHeight * 0.5;
})

let dx;
let dy;

function render(){
    dx = mousePosition.x - monPosition.x;
    dy = mousePosition.y - monPosition.y;

    monPosition.x = monPosition.x + dx * easeValue
    monPosition.y = monPosition.y + dy * easeValue
    
    monsterEl.style.transform = `translate(${monPosition.x}px, ${monPosition.y}px)`

    requestAnimationFrame(render)
}

render()