

    const searchFoods = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`
    
    
    // // load data
     fetch(url)
         .then(res => res.json())
         .then(data => displayFoods(data.meals))
    
};


 const displayFoods = foods => {
     const foodContainer = document.getElementById('food-container');
     console.log(foods);
     foodContainer.innerHTML = '';
     foods.forEach(food => {
         const foodDiv = document.createElement('div');
         foodDiv.className = 'single-result row align-items-center my-3 p-3';
         foodDiv.innerHTML = `
        <div class="col-md-9">
             <h3 class="lyrics-name">${food.strMeal}</h3>
             <p class="author lead"><span>${food.strArea}</span></p>
             
               <img src="${food.strMealThumb}"  width="251" height="251" >
            
           
         </div>
         <div class="col-md-3 text-md-right text-center">
             <button onclick="getLyric('${food.strArea}','${food.strMeal}','${food.strMealThumb}')" class="btn btn-success">Details</button>
        </div>
         `
         foodContainer.appendChild(foodDiv);
     })
 }
      
         
 
