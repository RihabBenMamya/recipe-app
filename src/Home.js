import './App.css';

import Filter from './Components/Filter';
import Recipe from './Components/Recipe';
import { useState,useEffect } from 'react';
const Home=()=> {
  const APP_ID ="f1257dc5";
  const APP_KEY ="ce19f084be495e0cd01e6224222ac411";
const [recipes, setRecipes]=useState([]);
  const [filterRecipe, setFilterhRecipe] =useState('');
  
  useEffect(()=>{
    getRecipes();
  },[filterRecipe]);
  
const getRecipes =async () =>{
const response = await fetch(
  `https://api.edamam.com/search?q=${filterRecipe}&app_id=${APP_ID}&app_key=${APP_KEY}`
);
const data = await response.json();
setRecipes(data.hits);
console.log(data.hits);
};


  
  return (
    <div className='container'>
      
      <header className="App-header">
      <div className ="filter">
      <Filter setFilterhRecipe={setFilterhRecipe}/>
      </div>
      </header>
      <div className="recipes">
     {recipes.map(item => (
     <Recipe recipe={item} />
     ))}
     </div>
     
    </div>
  );
}

export default Home;
