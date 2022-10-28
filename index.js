const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
// mongoose
//   .connect(MONGODB_URI)
//   .then(x => {
//     console.log(`Connected to the database: "${x.connection.name}"`);
//     // Before adding any recipes to the database, let's remove all existing ones
//     return Recipe.deleteMany()
//   })
//   .then(() => {
//     // Run your code here, after you have insured that the connection was made
//   })
//   .catch(error => {
//     console.error('Error connecting to the database', error);
//   });



//CONNECTION

const recipeApp = async function() {
  try {
    const x = await mongoose.connect(MONGODB_URI)
    console.log(`connected to ${x.connection.name}`)

    // addRecipe('Cheesecake', 'Greek')
    // addManyRecipes();
    // updateOneRecipe();

  } catch (error) {
    console.log(error)
  }
}

recipeApp();


//ITERATION 2 CREATE A RECIPE

// const addRecipe = async function(recipeTitle, recipeCuisine) {
//   try {
//     const newRecipe = await Recipe.create({
//       title: recipeTitle,
//       cuisine: recipeCuisine

//     })
//     console.log(newRecipe)

//   } catch (error){
//     console.log(error)
//   }
// }


//ITERATION 3 INSERT MULTIPLE RECIPES

// const addManyRecipes = async function () {
//   try {
//     const manyRecipes = await Recipe.insertMany(data);
//     console.log(manyRecipes)

//   } catch (error){
//     console.log(error)
//   }
// }


// UPDATE RECIPE

// const updateOneRecipe = async function () {
//   try {
//     const oneRecipe = await Recipe.updateOne({title: 'Rigatoni alla Genovese'}, {duration: 100 })
//     console.log(oneRecipe)
//     console.log('Yey Fixed!')

//   } catch (error) {
//     console.log(error)
//   }
// }