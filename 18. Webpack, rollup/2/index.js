import './style.css';
import Icon from './assets/images.png';

console.log('hello World');

const h1HTMLElement = document.createElement('h1');
const imgHTMLElement = document.createElement('img');

h1HTMLElement.textContent = 'I love JavaScript';
imgHTMLElement.src = Icon;

document.body.append(h1HTMLElement);
document.body.append(imgHTMLElement);