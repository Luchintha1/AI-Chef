import React from "react";

export function Main(){

    const [ingredients, set_ingredients] = React.useState([]);
    
    function handleSubmit(formData){

        const new_ingredient = formData.get("ingredient");
        set_ingredients((prev_ingredients) => [...prev_ingredients, new_ingredient]);
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
            <ul>
                {ingredientListItem}
            </ul>
        </main>
    );
}