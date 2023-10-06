export default createAboutPage;

function createAboutPage() {
  var main = document.querySelector('main');
  var p = document.createElement('p');
  p.textContent = 'Welcome to WeEats, a family-owned and operated restaurant that has been serving the community since 2005. We are passionate about food and our goal is to provide our guests with a unique and memorable dining experience.\
  Our menu features a variety of dishes, all made with fresh, high - quality ingredients.We offer a mix of classic and modern dishes, so there is something for everyone to enjoy.Whether you are in the mood for a juicy steak, a perfectly cooked seafood dish, or a vegetarian option, we have you covered.\
  In addition to our delicious food, we also offer a wide selection of wines and cocktails.Our knowledgeable staff is happy to help you choose the perfect pairing for your meal. \
  We believe that dining should be an experience, not just a meal.That is why we have created a warm and inviting atmosphere where our guests can relax and enjoy themselves.Our friendly and attentive staff will go above and beyond to make sure that you have a wonderful time.'

  main.appendChild(p);
}