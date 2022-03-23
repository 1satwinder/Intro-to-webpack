import generateJoke from './generateJoke.js';
import './styles/main.scss';
import { v4 as uuidv4 } from 'uuid';
import laughing from './assets/laughing.svg';

console.log("App Started");
document.write(uuidv4());

const laughImg = document.getElementById('laughImg');
laughImg.src = laughing;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke)

generateJoke();