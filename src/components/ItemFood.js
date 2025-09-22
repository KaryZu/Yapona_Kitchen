import "./ItemFood.css"
import MealItemForm from "./MealItemForm";


const ItemFood = (props) => {
  return (
    <div>
      <li className="oneItem">
        <div>
          <h3>{props.name}</h3>
          <p className="description">{props.description}</p>
          <p className="price">${props.price}</p>
        </div>
        <MealItemForm
          id={props.id}
          name={props.name}
          price={props.price}
        />
      </li>
    </div>
  )
}

export default ItemFood;