import Header from "./Header";

export default function App() {
  return (
    <div className="container">
      <div className="container-wrapper">
        <div className="input-wrapper">
          <input type="text" placeholder="eg. Oregano" />
          <button>+ Add ingredient</button>
        </div>
        <div className="ingredients-wrapper">
          <h2>Ingredients on hand</h2>
          <ul>
            <li>Chicken breasts</li>
            <li>Most of the main spices</li>
            <li>Olive oil</li>
            <li>Heavy cream</li>
            <li>Chicken broth</li>
            <li>Parmesan cheese</li>
            <li>Spinach</li>
          </ul>
        </div>
        <div className="button-wrapper">
          <div className="left">
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <div className="right">
            <button>Get a recipe</button>
          </div>
        </div>
        <div className="recipe-wrapper">
          <h2>Suggested recipe:</h2>
          <p>
            Based on your available ingredients, I would recommend making a
            Creamy Garlic Parmesan Chicken dish. Here’s the recipe:
          </p>
          <div className="ingredients-wrapper">
            <h4>Ingredients:</h4>
            <ul>
              <li>4 boneless, skinless chicken breasts</li>
              <li>Salt and pepper to taste</li>
              <li>2 tablespoons olive oil</li>
              <li>4 cloves garlic, minced</li>
              <li>1 cup heavy cream</li>
              <li>1/2 cup chicken broth</li>
              <li>1 teaspoon Italian seasoning</li>
              <li>1/2 cup grated Parmesan cheese</li>
              <li>1 cup fresh spinach (optional)</li>
              <li>1/2 cup sun-dried tomatoes (optional)</li>
              <li>Fresh parsley for garnish</li>
            </ul>
          </div>
          <div className="instructions-wrapper">
            <h4> Instructions:</h4>
            <ul>
              <li>
                1. Season the Chicken: Season the chicken breasts with salt and
                pepper on both sides.
              </li>
              <li>
                2. Cook the Chicken: In a large skillet, heat the olive oil over
                medium-high heat. Add the chicken breasts and cook for 5-7
                minutes on each side, or until golden brown and cooked through.
                Remove the chicken from the skillet and set it aside.
              </li>
              <li>
                3. Sauté Garlic: In the same skillet, reduce the heat to medium.
                Add the minced garlic and sauté for about 1 minute until
                fragrant.
              </li>
              <li>
                4. Make the Sauce: Add the heavy cream, chicken broth, and
                Italian seasoning to the skillet. Stir to combine and bring the
                mixture to a simmer.
              </li>
              <li>
                5. Add Parmesan: Stir in the Parmesan cheese and let it melt
                into the sauce. Continue to simmer for about 2-3 minutes until
                the sauce thickens slightly.
              </li>
              <li>
                6. Optional Add-ins: If using, add the fresh spinach and
                sun-dried tomatoes to the sauce. Cook for an additional 2-3
                minutes until the spinach is wilted.
              </li>
              <li>
                7. Combine with Chicken: Return the chicken breasts to the
                skillet, spooning the sauce over them. Let everything simmer
                together for a couple of minutes until the chicken is heated
                through.
              </li>
              <li>
                8. Serve: Garnish with fresh parsley and serve the chicken with
                the creamy garlic Parmesan sauce over pasta, rice, or mashed
                potatoes.
              </li>
              <li>Enjoy!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
