import "./MealsList.css"
import ItemFood from "./ItemFood";



const MealsList = (props) => {

  return (
    <section>
      <ul className="listFood">
        {props.items.map((item) => (
          <ItemFood
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </ul>
    </section>
  )
}

export default MealsList;