fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
.then(res => res.json())
.then(data => displayMeals(data));

const displayMeals = meals => {
    const mealDiv = document.getElementById('meals'); 
    countries.forEach(country => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';
        const mealInfo = `
             <h3 class = "meal-name">${categories.strCategory}</h3>
             <p>${meal.capital}</p>
             <button onclick="displayMealDetail('${meal.name}')">Details</button>

         `;
        mealDiv.innerHTML = mealInfo;

        mealsDiv.appendChild(mealDiv);

    });
