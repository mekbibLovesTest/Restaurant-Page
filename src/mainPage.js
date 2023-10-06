export default createMainPage;
import cardImgOne from './victoria-shes-aXZDr6Or8H0-unsplash.jpg';
import cardImgTwo from './victoria-shes-cMrLNX24eI0-unsplash.jpg';
import cardImgThree from './victoria-shes-gYOQyS4yL5g-unsplash.jpg';
import cardImgFour from './victoria-shes-jX0SK5r90C8-unsplash.jpg';
import cardImgFive from './victoria-shes-ptzFU4ouBLM-unsplash.jpg';
import cardImgSix from './victoria-shes-Wmeyp16whLI-unsplash.jpg';

function createMainPage(){
  var main = document.querySelector('main');
  var food = document.createElement('div');
  food.classList.add('food');

  food.append(...createCard(cardImgOne,cardImgTwo,cardImgThree,cardImgFour,cardImgFive,cardImgSix));

  main.appendChild(food);
}

function createCard(...images){
  var cards = [];
  for (const image of images){
    var card = document.createElement('div');
    card.classList.add('card');
    var img = document.createElement('img');
    img.src = image;
    img.alt = 'A picture of a food';
    img.width = 150;
    img.height = 150;
    
    var p = document.createElement('p');
    p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, sapiente.';

    
    card.appendChild(img);
    card.appendChild(p);
    cards.push(card);
  }

  
  return cards;
}

