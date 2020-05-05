const button = document.getElementById('button');
const text = document.getElementById('text');
const display = document.getElementById('display');

button.addEventListener('click', getApi);

function getApi() {
    // const proxy = "http://cors-anywhere.herokuapp.com/"
    let input = text.value;
    const api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
    fetch(api)
    .then (response => response.json())
    .then (data => 
        {
            console.log(data)
            display.innerHTML = data.meals.map(meal =>
                 `
<div id ="new-container">
                 <div>
                 <h4 id ="header">${meal.strMeal}</h4>
                 </div>

                 <img src = "${meal.strMealThumb}" id="image" width=250px height=250px>
                 
                <div id = "link" ><a href = "${meal.strYoutube}"</a> </div>

                <div id ="recipe">${meal.strInstructions}</div>
                 
     </div>            
                 
                 `).join('')

                 
            
        
        
        
        
        
        }
    )
}