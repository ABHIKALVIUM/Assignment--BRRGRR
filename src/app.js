var wholeWheatBun = 10;

var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  var cheese = document.getElementById('cheese');
  state.Cheese ? cheese.style.display = "block" : cheese.style.display = "none";
}

function renderTomatoes() {
  var tomatoes = document.getElementById('tomato');
  state.Tomatoes ? tomatoes.style.display = "block" : tomatoes.style.display = "none";
}

function renderOnions() {
  var onions = document.getElementById('onion');
  state.Onions ? onions.style.display = "block" : onions.style.display = "none";
}

function renderLettuce() {
  var lettuce = document.getElementById('lettuce');
  state.Lettuce ? lettuce.style.display = "block" : lettuce.style.display = "none";
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};

document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};

document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};

document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};

function renderButtons() {
  document.querySelector(".btn-cheese").classList.toggle('active', state.Cheese);
  document.querySelector(".btn-tomatoes").classList.toggle('active', state.Tomatoes);
  document.querySelector(".btn-onions").classList.toggle('active', state.Onions);
  document.querySelector(".btn-lettuce").classList.toggle('active', state.Lettuce);
}

function renderIngredientsBoard() {
  document.getElementById("cheese").style.visibility = state.Cheese ? "visible" : "hidden";
  document.getElementById("tomato").style.visibility = state.Tomatoes ? "visible" : "hidden";
  document.getElementById("onion").style.visibility = state.Onions ? "visible" : "hidden";
  document.getElementById("lettuce").style.visibility = state.Lettuce ? "visible" : "hidden";
}

function renderPrice() {
  var basePrice = wholeWheatBun;
  var cheesePrice = ingredients.Cheese;
  var tomatoPrice = ingredients.Tomatoes;
  var onionPrice = ingredients.Onions;
  var lettucePrice = ingredients.Lettuce;
  var price = basePrice + (state.Cheese * cheesePrice) + (state.Tomatoes * tomatoPrice) + (state.Onions * onionPrice) + (state.Lettuce * lettucePrice);
  document.querySelector(".price-details").innerText = "INR " + price;
}
