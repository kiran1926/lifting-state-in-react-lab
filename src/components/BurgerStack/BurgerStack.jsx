
const BurgerStack = (props) => {
  return (
    <div>
        <h2>🍔 Your Burger: </h2>
      <ul>
        {props.stack.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            <h2>{ingredient.name}</h2>
            <button onClick={() => props.removeFromBurger(ingredient)}>
            ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
  
  export default BurgerStack;
  