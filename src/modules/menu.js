import muchichi from '../assets/images/cooked-ribs.jpg';
import scrumptious from '../assets/images/crispy-sticky-coated-chicken.jpg';
import biteTongue from '../assets/images/orange-fillet-with-broccoli.jpg';
import tryMe from '../assets/images/pork-belly-dish.jpg';
import chewy from '../assets/images/steak-with-vegetables.jpg';

export default function menu(){
    let main = document.querySelector('#main');

    main.textContent = '';
    let names = ['Muchichi', 'Scrumptious', 'Bite Tongue', 'Try Me', 'Chewy'];
    let images = [muchichi,scrumptious,biteTongue,tryMe,chewy];
    let ingredients = ['Pork ribs,','Chicken,','Broccoli, Meat Fillet','Pork','Steak, Vegetables'];

    for(let i = 0, len = names.length;i < len;i++){
        let div = document.createElement('div');
        let para1 = document.createElement('p');
        para1.textContent = names[i];
        let img = new Image();
        img.src = images[i];
        let para2 = document.createElement('p');
        para2.textContent = ingredients[i];
        div.append(para1,img,para2);
        div.classList.add('eachMeal');
        main.appendChild(div);
        main.removeAttribute('id');
        main.setAttribute('id','mainMenu');
    }

}