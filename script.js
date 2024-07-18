// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsSection = document.getElementById('results');


// Event Listeners
searchButton.addEventListener('click', searchRecipes);
searchInput.addEventListener('keydown', handleEnterKey);

// Functions to fetch data from db
function searchRecipes() {
    const query = searchInput.value.toLowerCase();
    fetchData(query);
}

function fetchData(query) {
    fetch('http://localhost:3000/recipe')
        .then(response => response.json())
        .then(data => {
            const matchedRecipes = data.filter(recipe => recipe.title.toLowerCase().includes(query));
            if (matchedRecipes.length > 0) {
                displayRecipes(matchedRecipes);
            } else {
                resultsSection.innerHTML = '<p>No matching recipes found. Please try another search.</p>';
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayRecipes(recipes) {
    resultsSection.innerHTML = '';
    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <button class="view-details">View Details</button>
        `;
        recipeCard.querySelector('.view-details').addEventListener('click', () => showPopUp(recipe));
        resultsSection.appendChild(recipeCard);
    });
}

function showPopUp(recipe) {
    const pop_up = document.createElement('div');
    pop_up.classList.add('pop-card');

    pop_up.innerHTML = `
        <h1>${recipe.title}</h1> <br>
        <img src="${recipe.image}" alt="${recipe.title}"><br>
        <p>Ingredients: ${recipe.ingredients_list}</p><br>
        <p>Instructions: ${recipe.instructions}</p><br>
        <p>Prep time: ${recipe.preparation_time}</p><br>
        <p>Cook time: ${recipe.cooking_time}</p><br>
        <p>Total time: ${recipe.preparation_time + recipe.cook_time}</p><br>
        <p>Yield: ${recipe.yield}</p><br>
        <p>Allergen info: ${recipe.allergen_information_}</p><br>
        <p>Storage info: ${recipe.storage_information}</p><br>
        <p>Tips: ${recipe.tips}</p><br>
        <button class="close-popup">Close</button>
    `;

    document.body.appendChild(pop_up);

    const closeButton = pop_up.querySelector('.close-popup');
    closeButton.addEventListener('click', () => {
        document.body.removeChild(pop_up);
    });
}

//  event listener for the enter key to perform the search function
function handleEnterKey(event) {
    if (event.key === 'Enter') {
        searchRecipes();
    }
}