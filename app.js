const searchFoods = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

    //load data

    fetch(url)
        .then(res => res.json())
        .then(data => displayFoods(data.meals))
        .catch(error => displayError('Something Wrong!!!'));
}

const displayFoods = foods => {
    const foodContainer = document.getElementById('food-container');
    foodContainer.innerHTML = '';
    foods.forEach(food => {
        
        const foodDiv = document.createElement('div');
        foodDiv.className = 'single-result row align-items-center my-3 p-3 ';
        foodDiv.innerHTML = `
        <div  class="col-md-9">
                        <img  src="${food.strMealThumb}" alt="" width="400" height="251">
                        <h3 class="lyrics-name">${food.strMeal}</h3>
                        <p class="author lead">From <span>${food.strArea}</span></p>
                    </div>
                    <div class="col-md-3 text-md-right text-center">
                        <button onclick="getDetails('${food.idMeal}')" class="btn btn-success">Description</button>
                    </div>
        `;
        foodContainer.appendChild(foodDiv);
    })
}

const getDetails = async (detail) => {

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${detail}`
    try {
        const res = await fetch(url)
        const data = await res.json()
        displayDetails(data.meals[0].strInstructions)
    }
    catch {
        displayError('Sorry! I failed to load!');
    }
}

const displayDetails = details => {
    const detailsDiv = document.getElementById('food-details');
    detailsDiv.innerText = details;
}

const displayError = error => {
    const errorTag = document.getElementById('error-message');
    errorTag.innerText = error;
}
