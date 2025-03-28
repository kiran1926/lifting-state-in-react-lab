

const IngredientList = (props) => {

    return( 
        <div>
            <h2>🥬 Ingredients: </h2>
    <ul>
            { props.availableIngredients.map((ingredient, index) => (
                <li key={index} style={{ backgroundColor: ingredient.color }}>
                    <h2>{ ingredient.name }</h2>
                    <button onClick={() => props.addToBurger(ingredient)}> ➕ </button>
                </li>
            ))}
          </ul>
          </div>
    )
  };
  
  export default IngredientList;