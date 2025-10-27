import { useState, useRef, useEffect } from "react";
import IngredientsOnHandList from "./IngredientsOnHandList";
import GetRecipe from "./GetRecipe";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromMistral } from "../ai";

const IngredientForm = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipe, setRecipe] = useState("");
  const recipeSection = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (recipe !== "") {
      recipeSection.current!.scrollIntoView({behavior: "smooth"});
    }
  }, [recipe]);

  const getRecipe = async () => {
    const recipeMarkdown = (await getRecipeFromMistral(ingredients)) ?? "";
    setRecipe(recipeMarkdown);
  };

  // This method runs when the form is submitted i.e. get a recipe button is clicked
  const handleAddIngredient = (formData: FormData) => {
    // We get this from the input in the form with the name: ingredient.
    const newIngredient = formData.get("ingredient") as string;

    // If newIngredient is already in the array, then don't add it again
    if (ingredients.includes(newIngredient)) return;

    if (typeof newIngredient === "string" && newIngredient !== "") {
      // Set the previous state of the ingredients array to itself plus the new ingredient
      // here we are using the spread operator (...) to include all previous ingredients.
      setIngredients((prevIngredients) => [
        ...prevIngredients,
        newIngredient.trim(),
      ]);
    }
  };

  return (
    <main className="pt-15 pb-10 px-20">
      <form
        className="flex flex-row justify-center items-center gap-2 mb-8"
        action={handleAddIngredient}
      >
        <input
          className="max-w-[400px] min-w-[200px] h-[40px] grow border border-[#D1D5DB] px-[13px] py-[9px] rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.2)]"
          name="ingredient"
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
        />
        <button className="inter-medium w-[150px] h-[40px] bg-[#141413] text-[0.875rem] text-[#FAFAF8] leading-[20px] px-[17px] py-[9px] rounded-[6px] cursor-pointer text-nowrap">
          + Add ingredient
        </button>
      </form>
      {/* Only when we have ingredients do we want this to display */}
      {ingredients.length > 0 && (
        <section>
          <h1 className="inter-semibold text-[24px] leading-[38px]">
            Ingredients on hand:
          </h1>

          <IngredientsOnHandList ingredients={ingredients} />

          {/* This just helps us avoid users only typing in one ingredient */}
          {ingredients.length > 3 && (
            <>
              <p className="inter-regular text-[14px] text-[#141413] leading-[20px] mb-4">
                *Note: Please wait a moment after clicking the button so we can
                communicate with the AI system and get your recipe.*
              </p>
              <GetRecipe getRecipe={getRecipe} recipeSection={recipeSection} />
            </>
          )}
        </section>
      )}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
};

export default IngredientForm;
