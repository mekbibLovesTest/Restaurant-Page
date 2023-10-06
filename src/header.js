export default createHeader;
import restaurantImage from './jason-leung-poI7DelFiVA-unsplash.jpg'
function createHeader() {
  var content = document.querySelector('#content');
  var header = document.createElement('header');

  var logo = document.createElement('div');
  logo.classList.add('logo');
  var h1 = document.createElement('h1');
  h1.textContent = "WeEats"
  var imageLogo = document.createElement('img');
  imageLogo.width = '100';
  imageLogo.height = '100';
  imageLogo.src = restaurantImage;
  logo.append(imageLogo, h1);
  
  var nav = document.createElement('nav');
  var ul = document.createElement('ul');

  ul.appendChild(createLink('main'));
  ul.appendChild(createLink('contact'));
  ul.appendChild(createLink('about'));

  nav.appendChild(ul);
  header.appendChild(logo);
  header.appendChild(nav);
  content.insertBefore(header,document.querySelector('main'));
}

function createLink(name){
  var li = document.createElement('li');
  var button = document.createElement('button');
  button.textContent = name;
  li.appendChild(button);

  return li;
}