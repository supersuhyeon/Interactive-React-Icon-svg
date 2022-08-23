## Interactive React Icon SVG

![ezgif com-gif-maker](https://user-images.githubusercontent.com/94214512/186244658-60c26c7e-4710-422d-862d-07d14741761d.gif) <br>
A simple react web page created with a dynamic cursor <br>
[Interactive-React-Icon-Dynamic-Cursor](https://singular-croissant-a232d3.netlify.app/)

### Goal of the project

1. practice SVG animations and add a dynamic cursor with Javascript
2. Practice SVG grammar such as mask, viewBox, stroke-dashoffset, stroke-dasharray, etc.

### Languages

HTML, CSS, JavaScript

### Features

![readme-3](https://user-images.githubusercontent.com/94214512/186246796-ba1469c1-a945-492b-8503-f4630c1bc2a5.png)

1. ICON : React icon FOLLOWS the cursor and blinks using a mask property and animations

```3
function render(){
    dx = mousePosition.x - monPosition.x;
    dy = mousePosition.y - monPosition.y;

    monPosition.x = monPosition.x + dx * easeValue //easeValue = 0.05
    monPosition.y = monPosition.y + dy * easeValue //easeValue = 0.05

    monsterEl.style.transform = `translate(${monPosition.x}px, ${monPosition.y}px)`
    requestAnimationFrame(render)
}
render()
```

2. TITLE : By using an SVG animation with stroke properties, I could make the
   dynamic title that users can focus on

```3
@keyframes stroke{
    0%{
        fill: white;
        stroke:#61DAFB;
        stroke-dashoffset: 40%;
        stroke-dasharray:80%;
        stroke-width:0;
    }

    20%{
        fill: black;
        stroke: #61dafb;
        stroke-width:2;
    }

    60%{
        fill: black;
        stroke:#61dafb;
        stroke-width:1;
    }

    100%{
        fill: #61dafb;
        stroke: #61dafb;
        stroke-dashoffset: -40%;
        stroke-dasharray:80% 0;
        stroke-width:0;
    }
}
```

### Self-reflection

I feel that SVG animations are very strong tools and part of a great feature that keeps users engaged on your website longer. I would like to learn more interactive development in the future.
