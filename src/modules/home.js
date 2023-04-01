import cookedRibs from '../assets/images/chef.jpg';

export default function home(){
 document.querySelector('#main').textContent = '';
 let homeHeading = document.createElement('p');
 homeHeading.textContent = 'Delicious Aduane For The Mandem';

 let img = new Image();
 img.src = cookedRibs;

 let imgText = document.createElement('p');
 imgText.textContent = 'Love to see you here licking your fingers';

 document.querySelector('#main').append(homeHeading,img,imgText);
};