import "./App.css";
import { ThemeProvider } from '@mui/material/styles';
import { themeOptions } from './theme'; 
import { Searchbar } from "./Searchbar.js";
import Header from "./Header.js";
import { useState } from "react";
import { RecipesList } from "./RecipesList.js";

function App() {
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);
  
  return (
    <ThemeProvider theme={themeOptions}>
      <div className="App">
        <Header className="header" />
        <Searchbar setRecipes={setRecipes} />
        <RecipesList recipes={recipes} />
      </div>
    </ThemeProvider>
  );
}

export default App;