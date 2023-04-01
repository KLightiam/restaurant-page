import pageLoad from "./modules/page-load";
import home from "./modules/home";
import './styles/style.css';
import menu from './modules/menu.js';


pageLoad();
home();
let menuDiv = document.querySelector('.menu');
menuDiv.addEventListener('click',menu);