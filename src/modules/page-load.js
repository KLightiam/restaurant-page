export default function pageLoad(){
    let content = document.querySelector('#content');
    let header = document.createElement('div');
    let title = document.createElement('div');
    let navbar = document.createElement('ul');
    let home = document.createElement('li');
    let menu = document.createElement('li');
    let contact = document.createElement('li');

    title.textContent = 'Kasan Cuisine';
    title.classList.add('title');
    header.appendChild(title);

    home.textContent = 'Home';
    home.classList.add('home');
    menu.textContent = 'Menu';
    menu.classList.add('menu');
    contact.textContent = 'Contact';
    contact.classList.add('contact');

    navbar.append(home,menu,contact);
    navbar.classList.add('navbar');
    header.appendChild(navbar);
    header.classList.add('header');

    content.appendChild(header);

    let main = document.createElement('div');
    main.setAttribute('id','main');
    content.appendChild(main);

    let footer = document.createElement('div');
    footer.textContent = 'Kasan Cuisine';
    footer.classList.add('footer');
    content.appendChild(footer);
}