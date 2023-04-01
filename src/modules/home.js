import cookedRibs from '../assets/images/chef.jpg';

export default function home(){
 
 let homeHeading = document.createElement('p');
 homeHeading.textContent = 'Delicious Aduane For The Mandem';

 let img = new Image();
 img.src = cookedRibs;

 let imgText = document.createElement('p');
 imgText.textContent = 'Love to see you here licking your fingers';

 if(document.querySelector('#main')){
    document.querySelector('#main').textContent = '';
    document.querySelector('#main').append(homeHeading,img,imgText);
 
 }else if(document.querySelector('#mainMenu')){
    let main = document.querySelector('#mainMenu');
    main.textContent = '';
    main.removeAttribute('id');
    main.setAttribute('id','main');
    main.append(homeHeading,img,imgText);
 }
};