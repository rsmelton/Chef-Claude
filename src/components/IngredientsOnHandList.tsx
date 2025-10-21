type IngredientsOnHandListProps = {
    ingredients: string[];
}

const IngredientsOnHandList: React.FC<IngredientsOnHandListProps> = ({ ingredients }) => {
  return (
    <ul className="inter-regular text-[16px] text-[#475467] leading-[28px] list-disc mb-8">
      {ingredients.map((ingredient) => (
        <li className="ml-6 py-1" key={ingredient}>
          {ingredient}
        </li>
      ))}
    </ul>
  );
};

export default IngredientsOnHandList;