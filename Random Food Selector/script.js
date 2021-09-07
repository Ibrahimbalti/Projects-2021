// Target Dom Elements

const submitform=document.getElementById('submit');

const searchinput=document.getElementById('search-text');

const searchbtn=document.getElementById('search-btn');

const generatebtn=document.getElementById('generate-btn');

const meals=document.getElementById('meals');

const selectedmeals=document.getElementById('selected-meals');

const mealinfo=document.getElementById('meal-info');

const resultheading=document.getElementById('reuslt-heading')

// Fucntion
function searchMeal(e){

    e.preventDefault();
    const searchtext=searchinput.value;
    
    
    if(searchtext.trim())
    {
        resultheading.innerHTML=` Search Result Founded ${searchtext}`;
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchtext}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.meals===null){
                resultheading.innerHTML=`Result Not Founded ${searchtext}`
            }
            else{
                meals.innerHTML=data.meals.map(meal=>`
                <div class="meal">
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                    <div class="meal-info" data-mealID="${meal.idMeal}">
                                <h3>${meal.strMeal}</h3>
                            </div>
                </div>
                `
                )
                .join('')

                
            }
        });
        searchinput.value='';
        
    }

    else{
        alert("Enter Search key")
    }
}

function getMeal(mealid){
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
    .then(res=>res.json())
    .then(data=>{
        const meal=data.meals[0];
        
        DisplayMealDetail(meal)
    })
}

function DisplayMealDetail(meal){
  resultheading.innerHTML=''
  meals.innerHTML=''

    // const Ingredient=[];

    // for(let i=0;i<=20;i++){
    //     if(meal[`strIngredient${i}`]){
    //         // Ingredient.push(`${meal[`strIngredient${i}`]}:${meal[`strMeasure1${i}`]}`)

    //         console.log(meal[`strIngredient${i}`])
    //     }

    //     else{
    //         break
    //     }
    // }


    const ingredients = [];
    // Loop over ingredient attributes
    for ( let i = 1; i <= 20; i++ ) {
        // Check if ingredient exists
        if ( meal[`strIngredient${i}`] ) {
            // Push all the ingredients and measurements into the ingredients array
            ingredients.push(`${meal[`strIngredient${i}`]}: ${meal[`strMeasure${i}`]}`);
        } else {
            break;
        }
    };

    console.log(ingredients)

    selectedmeals.innerHTML=`
    <div class="selected-meal-details" id="selected-meal">
          <h3>${meal.strMeal}</h3>
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />

          <div class="selected-meal-info" >
          ${meal.strCategory ? `<p>${meal.strCategory}</p>` : '' }
          ${meal.strArea ? `<p class="strareainfo">${meal.strArea}</p>` : '' }
      </div>

<div class="selected-meal-instruction">
              
           <p class="instruction">${meal.strInstructions}</p>
                <h3>Ingredients</h3>
                <ul>
                ${ingredients.map(ingredient=>`
                <li>${ingredient}</li>`).join('')}
                </ul>
</div>
    </div>
    
    `
    // console.log(Ingredient)
}


function generateMeal(){

    // const selectemeal=document.getElementById('selected-meal');
    selectedmeals.innerHTML=''
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
            meals.innerHTML=data.meals.map(meal=>`
            <div class="meal">
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                <div class="meal-info" data-mealID="${meal.idMeal}">
                            <h3>${meal.strMeal}</h3>
                        </div>
            </div>
            `
            )
            .join('')

            
        
    });
}

//Events

searchbtn.addEventListener('click',searchMeal);

meals.addEventListener('click',e=>{
    const mealinfo=e.path.find(item=>{
        
        if(item.classList)
        {
            return item.classList.contains('meal-info')
        }

        else{
            return false;
        }
    })

    if(mealinfo){
        const mealid=mealinfo.getAttribute('data-mealid')
        getMeal(mealid);
    }
})

generatebtn.addEventListener('click',generateMeal)