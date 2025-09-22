import { useContext } from "react";
import DatasContext from '../context/datas-context';
import "./CartList.css";



const CartList = () => {
  const contextData = useContext(DatasContext);

  const addItem = (data) => {
    const newAmount = data.totalAmount + 1;
    updateAmount(newAmount, data);
  }

  const removeItem = (data) => {
    const newAmount = data.totalAmount - 1;
    updateAmount(newAmount, data);
  }

  const updateAmount = (newAmount, data) => {
    if (newAmount === 0) {
      // Delete
      const cart = contextData.datas;
      const updatedCart = cart.filter(object => object.id !== data.id);
      contextData.setDatas([...updatedCart]);
      return
    }

    // Update
    const updatedObject = {
      ...data,
      totalAmount: parseFloat(newAmount),
      cost: parseFloat((newAmount * data.price).toFixed(2))
    }

    const cart = contextData.datas;
    const updatedCart = cart.map(cartItem => {
      if (cartItem.id === data.id) {
        return updatedObject;
      }
      return cartItem;
    })
    contextData.setDatas([...updatedCart]);
  }

  return (
    <div className="listContainer">
      {contextData.datas.map((data) => (
        <div key={data.id} className="cartWrapper">
          <div>
            <h3>{data.name}</h3>
            <div className="cartValue">
              <p className="totalPrice">${data.cost}</p>
              <p className="totalAmount">{data.totalAmount}</p>
            </div>
          </div>
          <div className="addRemoveWrapper">
            <div className="container">
              <span className="material-icons" onClick={() => addItem(data)}>
                add_circle_outline
              </span>
            </div>
            <div className="container">
              <span className="material-icons" onClick={() => removeItem(data)}>
                remove_circle_outline
              </span>
            </div>
          </div>
        </div>
      )
      )}
    </div >
  )
}

export default CartList;