const recipes = [
    {
        id: 1,
        name: "Chocolate Cake",
        image: "img/cake.jpg",
        prepTime: "45 minutes",
        servings: "8 slices",
        ingredients: [
            "2 cups all-purpose flour", "2 cups sugar", "3/4 cup unsweetened cocoa powder",
            "2 teaspoons baking soda", "1 teaspoon baking powder", "1 teaspoon salt",
            "2 eggs", "1 cup milk", "1/2 cup vegetable oil",
            "2 teaspoons vanilla extract", "1 cup hot water"
        ],
        instructions: [
            "Preheat oven to 350°F (175°C). Grease and flour two 9-inch round baking pans.",
            "In a large bowl, combine the flour, sugar, cocoa, baking soda, baking powder and salt. Mix well.",
            "Add eggs, milk, oil and vanilla to the dry ingredients. Mix until well blended.",
            "Stir in hot water. The batter will be thin.",
            "Pour evenly into prepared pans.",
            "Bake for 30 to 35 minutes, or until a toothpick inserted in the center comes out clean.",
            "Cool in pans for 10 minutes, then remove to wire racks to cool completely."
        ]
    },
    {
        id: 2,
        name: "Chicken Alfredo",
        image: "img/Chickenalfredo.jpg",
        prepTime: "30 minutes",
        servings: "4 servings",
        ingredients: [
            "1 pound fettuccine pasta", "2 chicken breasts", "1 cup heavy cream",
            "1/2 cup butter", "1/2 cup grated Parmesan cheese", "2 cloves garlic, minced",
            "Salt and pepper to taste", "Chopped parsley for garnish"
        ],
        instructions: [
            "Cook fettuccine according to package instructions. Drain and set aside.",
            "Season chicken breasts with salt and pepper. Grill until cooked through, then slice.",
            "In a large skillet, melt butter over medium heat. Add minced garlic and cook for 1 minute.",
            "Add heavy cream and bring to a simmer. Cook for 5 minutes until slightly thickened.",
            "Stir in Parmesan cheese until melted and smooth.",
            "Add cooked pasta and sliced chicken to the sauce. Toss to coat evenly.",
            "Garnish with chopped parsley and serve hot."
        ]
    },
    {
        id: 3,
        name: "Vegetable Stir Fry",
        image: "img/stir-fry.jpg",
        prepTime: "20 minutes",
        servings: "3 servings",
        ingredients: [
            "2 cups mixed vegetables (bell peppers, broccoli, carrots, snap peas)",
            "2 tablespoons vegetable oil", "2 cloves garlic, minced",
            "1 tablespoon ginger, grated", "3 tablespoons soy sauce",
            "1 tablespoon sesame oil", "2 cups cooked rice"
        ],
        instructions: [
            "Heat vegetable oil in a large wok or skillet over medium-high heat.",
            "Add minced garlic and grated ginger. Stir-fry for 30 seconds until fragrant.",
            "Add mixed vegetables and stir-fry for 3-4 minutes until crisp-tender.",
            "Pour in soy sauce and sesame oil. Toss to coat vegetables evenly.",
            "Cook for an additional 1-2 minutes until vegetables are tender but still crisp.",
            "Serve hot over cooked rice."
        ]
    },
    {
        id: 4,
        name: "Beef Tacos",
        image: "img/beef.jpg",
        prepTime: "25 minutes",
        servings: "6 tacos",
        ingredients: [
            "1 pound ground beef", "1 packet taco seasoning", "12 taco shells",
            "1 cup shredded lettuce", "1/2 cup diced tomatoes", "1/2 cup shredded cheese",
            "Sour cream and salsa for garnish"
        ],
        instructions: [
            "Cook ground beef in a skillet over medium heat until browned. Drain excess fat.",
            "Add taco seasoning and water according to the packet instructions. Simmer for 5 minutes.",
            "Warm taco shells in the oven or microwave.",
            "Fill taco shells with seasoned beef, lettuce, tomatoes, and cheese.",
            "Garnish with sour cream and salsa."
        ]
    },
    {
        id: 5,
        name: "Spaghetti Carbonara",
        image: "img/SC.jpg",
        prepTime: "15 minutes",
        servings: "4 servings",
        ingredients: [
            "12 oz spaghetti", "2 eggs", "1 cup grated Parmesan cheese",
            "4 slices bacon", "2 cloves garlic, minced", "Salt and pepper to taste"
        ],
        instructions: [
            "Cook spaghetti according to package instructions. Drain and set aside.",
            "In a bowl, whisk together eggs and Parmesan cheese.",
            "Cook bacon in a skillet until crispy. Remove bacon and chop.",
            "In the same skillet, add minced garlic and cook for 1 minute.",
            "Add cooked spaghetti to the skillet and toss to coat with the garlic.",
            "Remove from heat, then quickly stir in the egg mixture. Add bacon and toss well.",
            "Season with salt and pepper to taste."
        ]
    },
    {
        id: 6,
        name: "Greek Salad",
        image: "img/salad.jpg",
        prepTime: "15 minutes",
        servings: "4 servings",
        ingredients: [
            "4 large tomatoes", "1 cucumber", "1 red onion",
            "200g feta cheese", "1/2 cup Kalamata olives", "2 tablespoons olive oil",
            "1 tablespoon red wine vinegar", "1 teaspoon dried oregano", "Salt and pepper to taste"
        ],
        instructions: [
            "Chop tomatoes and cucumber into bite-sized pieces.",
            "Slice red onion thinly.",
            "Cut feta cheese into cubes.",
            "In a large bowl, combine tomatoes, cucumber, onion, feta, and olives.",
            "In a small bowl, whisk together olive oil, red wine vinegar, oregano, salt, and pepper.",
            "Pour dressing over the salad and toss gently to combine.",
            "Serve immediately or chill for 30 minutes to let flavors meld."
        ]
    },
    {
        id: 7,
        name: "Mushroom Risotto",
        image: "img/Mushroom.jpg",
        prepTime: "40 minutes",
        servings: "4 servings",
        ingredients: [
            "1 1/2 cups Arborio rice", "4 cups vegetable or chicken broth", "1/2 cup white wine",
            "300g mixed mushrooms", "1 onion", "2 cloves garlic",
            "1/2 cup grated Parmesan cheese", "2 tablespoons butter", "2 tablespoons olive oil",
            "Salt and pepper to taste", "Fresh parsley for garnish"
        ],
        instructions: [
            "In a saucepan, heat the broth and keep it simmering.",
            "In a large pan, sauté chopped onion and garlic in olive oil until translucent.",
            "Add sliced mushrooms and cook until they release their moisture.",
            "Add Arborio rice and stir to coat with oil.",
            "Pour in white wine and stir until absorbed.",
            "Add hot broth one ladle at a time, stirring constantly and waiting for each addition to be absorbed before adding more.",
            "Continue until rice is creamy and al dente (about 18-20 minutes).",
            "Stir in butter and Parmesan cheese. Season with salt and pepper.",
            "Garnish with fresh parsley and serve immediately."
        ]
    },
    {
        id: 8,
        name: "Banana Bread",
        image: "img/banana.jpg",
        prepTime: "60 minutes",
        servings: "1 loaf",
        ingredients: [
            "3 ripe bananas", "1/3 cup melted butter", "1/2 cup sugar",
            "1 egg", "1 teaspoon vanilla extract", "1 teaspoon baking soda",
            "1/4 teaspoon salt", "1 1/2 cups all-purpose flour", "1/2 cup chopped walnuts (optional)"
        ],
        instructions: [
            "Preheat oven to 350°F (175°C). Grease a 4x8-inch loaf pan.",
            "In a mixing bowl, mash the ripe bananas with a fork until smooth.",
            "Stir the melted butter into the mashed bananas.",
            "Mix in the baking soda and salt.",
            "Stir in the sugar, beaten egg, and vanilla extract.",
            "Mix in the flour.",
            "Fold in the chopped walnuts if using.",
            "Pour the batter into the prepared loaf pan.",
            "Bake for 50 to 60 minutes, or until a toothpick inserted into the center comes out clean.",
            "Let cool in the pan for a few minutes, then remove to a wire rack to cool completely."
        ]
    },
    {
        id: 9,
        name: "Caprese Salad",
        image: "img/Caprese-Salad.jpg",
        prepTime: "10 minutes",
        servings: "4 servings",
        ingredients: [
            "4 large ripe tomatoes", "250g fresh mozzarella", "1 bunch fresh basil",
            "2 tablespoons extra virgin olive oil", "1 tablespoon balsamic vinegar",
            "Salt and freshly ground black pepper to taste"
        ],
        instructions: [
            "Slice the tomatoes and mozzarella into 1/4 inch thick slices.",
            "Arrange the tomato and mozzarella slices alternately on a serving platter.",
            "Tuck fresh basil leaves between the tomato and cheese slices.",
            "Drizzle with extra virgin olive oil and balsamic vinegar.",
            "Season with salt and freshly ground black pepper.",
            "Serve immediately at room temperature."
        ]
    },
    {
        id: 10,
        name: "Guacamole",
        image: "img/gua.jpg",
        prepTime: "15 minutes",
        servings: "4 servings",
        ingredients: [
            "3 ripe avocados", "1 lime, juiced", "1 small onion, finely chopped",
            "2 Roma tomatoes, diced", "3 tablespoons fresh cilantro, chopped",
            "1 jalapeno pepper, seeded and minced", "1 clove garlic, minced",
            "1/2 teaspoon salt", "1/4 teaspoon ground cumin"
        ],
        instructions: [
            "Cut avocados in half, remove pit, and scoop out the flesh into a bowl.",
            "Mash the avocados with a fork, leaving some chunks for texture.",
            "Add lime juice and mix well to prevent browning.",
            "Stir in onion, tomatoes, cilantro, jalapeno, and garlic.",
            "Season with salt and cumin.",
            "Taste and adjust seasoning if needed.",
            "Serve immediately with tortilla chips or refrigerate with plastic wrap directly on the surface of the guacamole to prevent browning."
        ]
    },
    {
        id: 11,
        name: "Lemon Garlic Roasted Chicken",
        image: "img/lem.jpg",
        prepTime: "90 minutes",
        servings: "4 servings",
        ingredients: [
            "1 whole chicken (about 3-4 lbs)", "2 lemons", "1 head of garlic",
            "3 tablespoons olive oil", "2 teaspoons dried thyme",
            "Salt and freshly ground black pepper", "1 cup chicken broth"
        ],
        instructions: [
            "Preheat oven to 425°F (220°C).",
            "Rinse the chicken inside and out, then pat dry with paper towels.",
            "Cut one lemon into quarters and place inside the chicken cavity along with half the garlic head.",
            "In a small bowl, mix olive oil, juice from the second lemon, minced garlic (from the other half of the head), thyme, salt, and pepper.",
            "Rub the mixture all over the chicken, including under the skin.",
            "Place the chicken in a roasting pan and pour chicken broth into the pan.",
            "Roast for about 1 hour and 15 minutes, or until the juices run clear when you cut between the leg and thigh.",
            "Let the chicken rest for 10 minutes before carving.",
            "Serve with the pan juices drizzled over the top."
        ]
    },
    {
        id: 12,
        name: "Vegetarian Chili",
        image: "img/Vegetarian.jpg",
        prepTime: "45 minutes",
        servings: "6 servings",
        ingredients: [
            "2 cans (15 oz each) kidney beans", "1 can (15 oz) black beans",
            "1 can (14.5 oz) diced tomatoes", "1 onion, chopped",
            "2 bell peppers, chopped", "2 cloves garlic, minced",
            "2 tablespoons olive oil", "2 tablespoons chili powder",
            "1 teaspoon ground cumin", "1 teaspoon dried oregano",
            "Salt and pepper to taste", "Optional toppings: shredded cheese, sour cream, chopped cilantro"
        ],
        instructions: [
            "In a large pot, heat olive oil over medium heat.",
            "Add onion and bell peppers, cook until softened, about 5 minutes.",
            "Add garlic and cook for another minute.",
            "Stir in chili powder, cumin, and oregano.",
            "Add diced tomatoes (with their juice) and all the beans (drained and rinsed).",
            "Bring to a simmer and cook for about 30 minutes, stirring occasionally.",
            "Season with salt and pepper to taste.",
            "Serve hot with your choice of toppings."
        ]
    },
    {
    id: 13,
    name: "Quinoa Salad",
    image: "img/q.jpg",
    prepTime: "20 minutes",
    servings: "4 servings",
    ingredients: [
        "1 cup quinoa", "2 cups water", "1 cucumber, diced",
        "1 red bell pepper, diced", "1/4 cup red onion, finely chopped",
        "1/4 cup feta cheese, crumbled", "2 tablespoons olive oil",
        "1 tablespoon lemon juice", "Salt and pepper to taste"
    ],
    instructions: [
        "Rinse quinoa and cook in water according to package instructions. Let cool.",
        "In a large bowl, combine cooled quinoa, cucumber, bell pepper, and red onion.",
        "In a small bowl, whisk together olive oil and lemon juice.",
        "Pour dressing over the salad and toss to combine.",
        "Add crumbled feta cheese and gently mix.",
        "Season with salt and pepper to taste.",
        "Chill for at least 30 minutes before serving."
    ]
},
{
    id: 14,
    name: "Teriyaki Salmon",
    image: "img/salmon.jpg",
    prepTime: "25 minutes",
    servings: "4 servings",
    ingredients: [
        "4 salmon fillets", "1/4 cup soy sauce", "1/4 cup mirin",
        "2 tablespoons brown sugar", "2 cloves garlic, minced",
        "1 teaspoon grated ginger", "1 tablespoon cornstarch",
        "2 tablespoons water", "Sesame seeds and sliced green onions for garnish"
    ],
    instructions: [
        "In a small saucepan, combine soy sauce, mirin, brown sugar, garlic, and ginger.",
        "Bring to a simmer over medium heat, stirring until sugar dissolves.",
        "Mix cornstarch with water and add to the sauce. Simmer until thickened.",
        "Preheat oven to 400°F (200°C).",
        "Place salmon fillets in a baking dish and brush with teriyaki sauce.",
        "Bake for 12-15 minutes, or until salmon flakes easily with a fork.",
        "Brush with more sauce and garnish with sesame seeds and green onions before serving."
    ]
},
{
    id: 15,
    name: "Spinach and Mushroom Quiche",
    image: "img/spinach.jpg",
    prepTime: "50 minutes",
    servings: "6 servings",
    ingredients: [
        "1 pre-made pie crust", "2 cups fresh spinach", "1 cup sliced mushrooms",
        "1 onion, diced", "4 eggs", "1 cup milk",
        "1 cup shredded cheese", "Salt and pepper to taste",
        "1 tablespoon olive oil"
    ],
    instructions: [
        "Preheat oven to 375°F (190°C).",
        "Heat olive oil in a skillet and sauté onions and mushrooms until softened.",
        "Add spinach and cook until wilted. Set aside to cool.",
        "In a bowl, whisk together eggs, milk, salt, and pepper.",
        "Spread the vegetable mixture in the pie crust.",
        "Pour the egg mixture over the vegetables and sprinkle with cheese.",
        "Bake for 35-40 minutes, or until the center is set and the top is golden brown.",
        "Let cool for 10 minutes before slicing and serving."
    ]
},

{
id: 16,
name: "Eggplant Parmesan",
image: "img/Egg.jpg",
prepTime: "1 hour",
servings: "6 servings",
ingredients: [
    "2 large eggplants, sliced", "2 cups breadcrumbs",
    "4 eggs, beaten", "3 cups marinara sauce",
    "2 cups mozzarella cheese, shredded", "1 cup Parmesan cheese, grated",
    "1/4 cup fresh basil, chopped", "Salt and pepper to taste",
    "Vegetable oil for frying"
],
instructions: [
    "Preheat oven to 375°F (190°C).",
    "Season eggplant slices with salt and let sit for 30 minutes. Pat dry.",
    "Dip eggplant slices in beaten eggs, then coat with breadcrumbs.",
    "Fry eggplant slices in hot oil until golden brown. Drain on paper towels.",
    "In a baking dish, layer marinara sauce, eggplant slices, and cheeses.",
    "Repeat layers, ending with cheese on top.",
    "Bake for 25-30 minutes until cheese is bubbly and golden.",
    "Sprinkle with fresh basil before serving."
]
},
{
id: 17,
name: "Quinoa Stuffed Bell Peppers",
image: "img/tu.jpg",
prepTime: "45 minutes",
servings: "4 servings",
ingredients: [
    "4 large bell peppers", "1 cup quinoa",
    "2 cups vegetable broth", "1 can black beans, drained and rinsed",
    "1 cup corn kernels", "1 diced tomato",
    "1/2 cup red onion, diced", "2 cloves garlic, minced",
    "1 tsp cumin", "1 tsp chili powder",
    "1 cup shredded cheddar cheese", "2 tbsp olive oil",
    "Salt and pepper to taste"
],
instructions: [
    "Preheat oven to 375°F (190°C).",
    "Cut tops off peppers and remove seeds. Place in a baking dish.",
    "Cook quinoa in vegetable broth according to package instructions.",
    "In a large bowl, mix cooked quinoa, beans, corn, tomato, onion, garlic, and spices.",
    "Stuff the peppers with the quinoa mixture.",
    "Cover with foil and bake for 30-35 minutes.",
    "Remove foil, top with cheese, and bake for another 5 minutes until cheese melts.",
    "Serve hot, garnished with fresh cilantro if desired."
]
},
{
id: 18,
name: "Paneer Tikka Masala",
image: "img/paneer.jpg",
prepTime: "45 minutes",
servings: "4 servings",
ingredients: [
    "400g paneer, cubed", "1 large onion, finely chopped",
    "2 tomatoes, pureed", "3 cloves garlic, minced",
    "1 tbsp ginger, grated", "1 cup heavy cream",
    "2 tbsp vegetable oil", "2 tbsp butter",
    "2 tsp garam masala", "1 tsp turmeric powder",
    "1 tsp red chili powder", "1 tsp cumin powder",
    "1/4 cup cashews, soaked and blended", "Salt to taste",
    "Fresh cilantro for garnish"
],
instructions: [
    "In a large pan, heat oil and butter over medium heat.",
    "Add onions and sauté until golden brown.",
    "Add ginger and garlic, cook for another minute.",
    "Stir in turmeric, red chili powder, cumin powder, and 1 tsp garam masala. Cook for 30 seconds.",
    "Add tomato puree and cook until oil separates, about 5-7 minutes.",
    "Pour in cream and cashew paste. Simmer for 5 minutes.",
    "Add paneer cubes and cook for 5 more minutes.",
    "Season with salt and remaining garam masala.",
    "Garnish with fresh cilantro and serve hot with naan or rice."
]
},
{
id: 19,
name: "Vegetable Pad Thai",
image: "img/easy.jpg",
prepTime: "30 minutes",
servings: "4 servings",
ingredients: [
    "8 oz rice noodles", "2 eggs, lightly beaten",
    "1 cup firm tofu, cubed", "1 cup bean sprouts",
    "1/2 cup carrots, julienned", "3 green onions, sliced",
    "1/4 cup peanuts, chopped", "2 cloves garlic, minced",
    "3 tbsp vegetable oil", "2 tbsp soy sauce",
    "2 tbsp rice vinegar", "2 tbsp brown sugar",
    "1 tbsp tamarind paste", "1 lime, juiced",
    "Red pepper flakes to taste"
],
instructions: [
    "Soak rice noodles in hot water for 15 minutes, then drain.",
    "In a small bowl, mix soy sauce, rice vinegar, brown sugar, tamarind paste, and lime juice.",
    "Heat oil in a wok or large skillet over medium-high heat.",
    "Add garlic and tofu, cook until tofu is golden.",
    "Push tofu to the side and scramble eggs in the pan.",
    "Add noodles and sauce mixture, toss to combine.",
    "Add carrots, bean sprouts, and most of the green onions. Stir-fry for 2-3 minutes.",
    "Serve hot, topped with peanuts, remaining green onions, and red pepper flakes."
]
},
{
id: 20,
name: "Lentil and Vegetable Curry",
image: "img/i.jpg",
prepTime: "45 minutes",
servings: "6 servings",
ingredients: [
    "1 cup red lentils", "1 can coconut milk",
    "2 cups mixed vegetables (carrots, potatoes, cauliflower)",
    "1 onion, diced", "3 cloves garlic, minced",
    "1 tbsp ginger, grated", "2 tbsp curry powder",
    "1 tsp turmeric", "1 tsp cumin",
    "2 tbsp vegetable oil", "2 cups vegetable broth",
    "Salt to taste", "Fresh cilantro for garnish"
],
instructions: [
    "Rinse lentils and set aside.",
    "Heat oil in a large pot over medium heat. Sauté onions until translucent.",
    "Add garlic and ginger, cook for another minute.",
    "Stir in curry powder, turmeric, and cumin. Cook until fragrant.",
    "Add vegetables and lentils, stir to coat with spices.",
    "Pour in coconut milk and vegetable broth. Bring to a boil.",
    "Reduce heat and simmer for 20-25 minutes until lentils and vegetables are tender.",
    "Season with salt. Serve over rice, garnished with fresh cilantro."
]
}

    
];

function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}">
        <div class="recipe-card-content">
            <h3>${recipe.name}</h3>
            <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                ${recipe.prepTime}
            </p>
        </div>
    `;
    card.addEventListener('click', () => openModal(recipe));
    return card;
}

function renderRecipes() {
    const grid = document.getElementById('recipes-grid');
    const gridAlt = document.getElementById('recipes-grid-alt');
    recipes.forEach(recipe => {
        grid.appendChild(createRecipeCard(recipe));
        gridAlt.appendChild(createRecipeCard(recipe));
    });
}

function openModal(recipe) {
    const modal = document.getElementById('recipeModal');
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <h2>${recipe.name}</h2>
        <img src="${recipe.image}" alt="${recipe.name}">
        <p>Prep Time: ${recipe.prepTime}</p>
        <p>Servings: ${recipe.servings}</p>
        <h3>Ingredients:</h3>
        <ul>${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
        <h3>Instructions:</h3>
        <ol id="instructionsList">
            ${recipe.instructions.map((instruction, index) => `
                <li class="instruction-item">
                    <span class="instruction-text">${instruction}</span>
                    <input type="checkbox" id="instruction-${index}" class="instruction-checkbox" aria-label="Mark instruction as completed">
                </li>
            `).join('')}
        </ol>
        <div id="timerContainer">
            <p id="timerDisplay">00:00</p>
            <div>
                <button id="startStopBtn">Start</button>
                <button id="resetBtn">Reset</button>
            </div>
        </div>
    `;
    modal.style.display = 'block';

    let timer, timeLeft = parseInt(recipe.prepTime) * 60, isRunning = false;
    const timerDisplay = document.getElementById('timerDisplay');
    const startStopBtn = document.getElementById('startStopBtn');
    const resetBtn = document.getElementById('resetBtn');
    const instructionsList = document.getElementById('instructionsList');

    function updateTimerDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function startTimer() {
        isRunning = true;
        startStopBtn.textContent = 'Stop';
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimerDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;
                startStopBtn.textContent = 'Start';
            }
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timer);
        isRunning = false;
        startStopBtn.textContent = 'Start';
    }

    function resetTimer() {
        clearInterval(timer);
        timeLeft = parseInt(recipe.prepTime) * 60;
        isRunning = false;
        startStopBtn.textContent = 'Start';
        updateTimerDisplay();
    }

    startStopBtn.addEventListener('click', () => isRunning ? stopTimer() : startTimer());
    resetBtn.addEventListener('click', resetTimer);
    instructionsList.addEventListener('change', (event) => {
        if (event.target.classList.contains('instruction-checkbox')) {
            const listItem = event.target.closest('.instruction-item');
            listItem.classList.toggle('completed-instruction', event.target.checked);
        }
    });

    updateTimerDisplay();
}

const modal = document.getElementById('recipeModal');
const closeBtn = document.getElementsByClassName('close')[0];
closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = 'none';
}

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

document.querySelectorAll('nav a, footer a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(e.target.getAttribute('data-section'));
    });
});

document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log('Form submitted:', Object.fromEntries(formData.entries()));
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
});

renderRecipes();