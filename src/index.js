import pageLoad from "./modules/page-load";
import home from "./modules/home";
import './styles/style.css';
import menu from './modules/menu.js';
import contact from './modules/contact.js';


pageLoad();
home();
let menuDiv = document.querySelector('.menu');
menuDiv.addEventListener('click',menu);

let homeDiv = document.querySelector('.home');
homeDiv.addEventListener('click',home);

let contactDiv = document.querySelector('.contact');
contactDiv.addEventListener('click',contact);