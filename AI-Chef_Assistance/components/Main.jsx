import React from "react";

export function Main(){

    const [ingredients, set_ingredients] = React.useState([]);
    
    function handleSubmit(event){

        event.preventDefault();

        const form_data = new FormData(event.currentTarget);
        const new_ingredient = form_data.get("ingredient");

        set_ingredients((prev_ingredients) => [...prev_ingredients, new_ingredient]);
    }

    const ingredientListItem = ingredients.map((item) => <li key={item}>{item}</li>)

    return(
        <main>
            <form onSubmit={handleSubmit}>
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