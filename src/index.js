import './index.css';
const animateText = document.getElementById('animated-text');
const textArray = animateText.innerText.split('');

animateText.firstChild.remove();

//Probably a better way to do this.
const elArray = textArray.map((letter, index) => {
    if (letter == ' ') letter = '&nbsp;';
    const el = document.createElement('span');
    el.className = 'letter';
    el.innerHTML = letter;
    el.style.animationDelay = index / textArray.length + 's';
    animateText.appendChild(el);
    return el;
});

animateText.innerHtml = elArray;
