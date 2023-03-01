import { config } from "./config.js";

const API_KEY = '6957eb2deeca45fbac6de2c4295e2aff'
const foodInsert = document.getElementById('food');

const search = document.getElementById('search')
const userInput = document.getElementById('userInput')
async function getFood(){
    const response = await fetch(`https://api.spoonacular.com/food/products/search?query=${userInput.value}&apiKey=${config.token}`);
    const data = await response.json();
    //Gather all the results into a new array
    console.log(data)
    const allFood = data.products.map((x) => x);
    let output = "";
    for(let item of allFood){
        output += `
            
            <img src="${item.image}" alt="${item.title}">
        `
    }
    foodInsert.innerHTML = output;
}


search.addEventListener("click", getFood);
userInput.addEventListener("keyup", (e) => {
    if(e.key == 'Enter'){
        getFood()
    }
})