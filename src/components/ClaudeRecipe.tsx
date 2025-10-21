import ReactMarkdown from "react-markdown";

type ClaudeRecipeProps = {
  recipe: string;
};

const ClaudeRecipe: React.FC<ClaudeRecipeProps> = ({ recipe }) => {
  return (
    <section>
      <h2 className="inter-semibold text-[24px] text-[#141413] text-nowrap leading-[24px] mb-4">
        Chef Claude recommends:
      </h2>
      <ReactMarkdown>{recipe}</ReactMarkdown>
    </section>
  );
};

export default ClaudeRecipe;
