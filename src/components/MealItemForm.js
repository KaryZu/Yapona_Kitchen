import { useContext, useState } from "react";
import styles from "./MealItemForm.module.css"
import DatasContext from '../context/datas-context';



const MealItemForm = (props) => {
  const [amount, setAmount] = useState(0);
  const context = useContext(DatasContext);

  const amountChangeHandler = (event) => {
    setAmount(parseInt(event.target.value));
  }

  const submitHandler = (event) => {
    event.preventDefault();

    // если количество 0
    if (amount === 0) {
      return
    }


    // добавить больше роллов в один объект
    const cart = context.datas;
    const element = cart.find(data => data.id === props.id);
    if (element !== undefined) {
      element.totalAmount = element.totalAmount + amount;
      const summa = props.price * element.totalAmount;
      element.cost = parseFloat(summa.toFixed(2));
      context.setDatas([...cart]);
      setAmount(0);
      return;
    }

    // основной алгоритм
    const summa = props.price * amount;

    const datasOneItem = {
      id: props.id,
      name: props.name,
      price: props.price,
      totalAmount: amount,
      cost: parseFloat(summa.toFixed(2))
    }

    context.setDatas([...context.datas, datasOneItem])
    setAmount(0);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.amountWrapper}>
        <label htmlFor={props.id}>Amount</label>
        <input
          min="0"
          id={props.id}
          type="number"
          value={amount}
          onChange={amountChangeHandler}
        />
      </div>
      <button className={styles.buttonAdd}>Add</button>
    </form>
  )
}

export default MealItemForm;