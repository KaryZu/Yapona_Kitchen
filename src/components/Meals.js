import "./Meals.css"
import MealsList from "./MealsList";

const ALL_FOOD = [
  {
    id: "m1",
    name: 'Roll "Naomi"',
    description:
      "Philadelphia cheese, chicken fillet, masago, tomato, cucumber, sesame seeds",
    price: 11.99,
  },
  {
    id: "m2",
    name: "Spice in salmon",
    description: "Rice, salmon, spice sauce",
    price: 3.99,
  },
  {
    id: "m3",
    name: "Eel sushi",
    description: "Smoked eel, unagi sauce, sesame",
    price: 4.99,
  },
  {
    id: "m4",
    name: 'Salmon Poke Salad',
    description:
      "Rice, salmon, cucumber, chuka, nori, tuna shavings, nut sauce",
    price: 7.99,
  },
]



const Meals = () => {
  return (
    <div className="meals">
      <MealsList items={ALL_FOOD} />
    </div>
  )
}

export default Meals;