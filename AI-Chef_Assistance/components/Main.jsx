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
            {ingredients.length > 0 &&
            <section>
                <h2>Ingredients on hand: </h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientListItem}</ul>
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Generate a Recipe</button>
                </div>
            </section>}
        </main>
    );
}