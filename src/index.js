import createHeader from "./header";
import createMainPage from "./mainPage";
import createContactPage from "./contact";
import createAboutPage from "./about";
import './style.css';
createHeader();
createMainPage();

var links = document.querySelectorAll('button');
links.forEach(link => {
  link.addEventListener('click',createPage)
})


function createPage(e){
  var pageName = e.target.textContent;
  var main = document.querySelector('main'); 
  main.textContent = '';
  if (pageName === 'main')
    createMainPage();
  else if(pageName == 'contact')
    createContactPage();
  else
    createAboutPage();
}
