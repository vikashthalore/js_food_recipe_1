
let food = document.querySelector('.food');

let indian = document.querySelector('#indian')
let american = document.querySelector('#american')
let canedian = document.querySelector('#canedian')
let thai = document.querySelector('#thai')
let british = document.querySelector('#british')
let russian = document.querySelector('#russian')

let recipe;



const fetchData = async (area) => {
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)

    const data = await api.json();

    recipe = data.meals

    showData(recipe)

    // console.log('my api res', data.meals)
};

const searchRecipe = () => {
    let input = document.querySelector('#search');

    input.addEventListener('keydown', async (e) => {

        if (e.key === "Enter") {
            let inputValue = input.value;


            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)

            const data = await api.json();

            recipe = data.meals

            showData(recipe)
        }
    });

};
searchRecipe();

let showData = (recipe) => {
    food.innerHTML = recipe.map((meal) => `
    <div style="text-align:center">
    <div>
    <img src= ${meal.strMealThumb} style="width:220px; border-radius:10px; border:2px solid blue"/>
    </div>
     <h5 style="margin:10px">${meal.strMeal}</h5>
    </div>
    `).join(" ")
}

fetchData('indian')

indian.addEventListener('click', () => {
    fetchData('indian')
})

canedian.addEventListener('click', () => {
    fetchData('canadian')
})

american.addEventListener('click', () => {
    fetchData('american')
})

british.addEventListener('click', () => {
    fetchData('british')
})

thai.addEventListener('click', () => {
    fetchData('thai')
})

russian.addEventListener('click', () => {
    fetchData('russian')
})