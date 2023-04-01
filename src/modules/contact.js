import map from '../assets/images/map.png';

export default function contact(){
    let div = document.createElement('div');
    let para1 = document.createElement('p');
    para1.textContent = 'Contact: 022-233-4455';

    let para2 = document.createElement('p');
    para2.textContent = 'Location: Tema Community 25, Peace Be';

    let img = new Image();
    img.src = map;

    div.append(para1,para2,img);
    div.classList.add('contactInfo');
    if(document.querySelector('#main')){
        let main = document.querySelector('#main');
        main.textContent = '';
        main.removeAttribute('id');
        main.setAttribute('id','mainMenu');
        main.appendChild(div);
     
     }else if(document.querySelector('#mainMenu')){
        let main = document.querySelector('#mainMenu');
        main.textContent = '';
        main.appendChild(div);
     }
}