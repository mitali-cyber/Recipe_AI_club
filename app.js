// console.log("H1");
const app_id = "b221a1a9"
const app_key = "29577e76873f292a3a8cb25e1fd438ae"
const query = "pizza";

var button = documen.querySelector("button");
console.log(button);

const get_recipe = async( )=>{
var input = document.querySelector("input");

console.log(input.value);
const response = await fetch(
        'https://api.edamam.com/api/recipes/v2?type=publuc&q=$(input.value)&a(pp_id)&app_key=$(app_key)');
var data = await response.json();

console.log(data);
   // data= data.hits;

var cards = document.querySelector(".Card-section")
cards.innerHTML=""
for (let i=0; i < data.hits.length ; i++) {
    cards.innerHTML += 
    <div class="card">
        <div class="card__body">
        <img 
            src="${data.hits.[i].recipe.image}"
            alt=""
        class= "card__image"
        />
        <h2 class="card__title">${data.hits[i].recipe. label}</h2>
        <p class="card__description">
            Take your boring salads up a knotch. This recipe is a perfect for
            lunch and only conatins 5 ingredients!
        </p>
    </div>
        <a href ="${data.hits[i].recipe.url}" class= "card_btn">View Recipe</a>
    </div>
        ;
    }

                
};

button.addEventListener("click",get_recipe);  