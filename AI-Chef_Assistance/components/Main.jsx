import React from "react";
import Recipe from "./Recipe";
import IngredientsList from "./IngredientsList";

export function Main(){

    const [ingredients, setIngredients] = React.useState([]);
    const [recipeShown, setRecipeShown] = React.useState(false);
    
    function handleSubmit(formData){

        const new_ingredient = formData.get("ingredient");
        setIngredients((prev_ingredients) => [...prev_ingredients, new_ingredient]);
    }

    function getReceipe(){
        setRecipeShown(true);
    }

    const ingredientListItem = ingredients.map((item) => <li key={item}>{item}</li>)

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
            <IngredientsList ingredientListItem={ingredientListItem} ingredients={ingredients} getReceipe={getReceipe}/>}
            {
                recipeShown && 
                <Recipe/>
            }
        </main>
    );
}