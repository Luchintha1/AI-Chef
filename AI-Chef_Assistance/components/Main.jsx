import React from "react";
import Recipe from "./Recipe.jsx";
import IngredientsList from "./IngredientsList.jsx";
import { getRecipeFromMistral } from "../ai.js";

export function Main(){

    const [ingredients, setIngredients] = React.useState([]);
    const [recipe, setRecipe] = React.useState("");

    const recipeSection = React.useRef(null);
    
    function handleSubmit(formData){
        const new_ingredient = formData.get("ingredient");
        setIngredients((prev_ingredients) => [...prev_ingredients, new_ingredient]);
    }

    React.useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    }, [recipe])

    async function getRecipe(){
        const receipeResponse = await getRecipeFromMistral(ingredients);
        console.log(receipeResponse);
        setRecipe(receipeResponse);
    }

    return(
        <main>
            <form action={handleSubmit}>
                <input
                type="text"
                placeholder="e.g. Potato"
                aria-label="Add Ingredients"
                name="ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            {ingredients.length > 0 &&
            <IngredientsList ref={recipeSection} ingredients={ingredients} getReceipe={getRecipe}/>}
            {
                recipe && <Recipe recipe={recipe}/>
            }
        </main>
    );
}