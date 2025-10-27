import type { RefObject } from "react";

type GetRecipeProps = {
  getRecipe: () => void;
  recipeSection: RefObject<HTMLDivElement | null>;
};

const GetRecipe: React.FC<GetRecipeProps> = ({ getRecipe, recipeSection }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:items-center gap-4 md:gap-8 max-w-[600px] overflow-scroll bg-[#F0EFEB] rounded-lg px-8 py-8 mb-8">
      <div ref={recipeSection}>
        <h3 className="inter-medium text-[18px] text-[#141413] text-nowrap leading-[24px]">
          Ready for a recipe?
        </h3>
        <p className="inter-regular text-[#6B7280] leading-[20px]">
          Generate a recipe from your list of ingredients
        </p>
      </div>
      <button
        className="w-[150px] text-white text-nowrap rounded-lg px-4 py-2 cursor-pointer bg-[#D17557]"
        onClick={getRecipe}
      >
        Get a recipe
      </button>
    </div>
  );
};

export default GetRecipe;
