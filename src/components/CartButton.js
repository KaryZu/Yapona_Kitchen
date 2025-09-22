import CartWindow from "./CartWindow";
import styles from "./CartButton.module.css";
import React, { useState, useContext, useEffect } from "react";
import DatasContext from '../context/datas-context';

const CartButton = () => {
  const [showModalWindow, setShowModalWindow] = useState(false);
  const [isButtonAnimated, setIsButtonAnimated] = useState(false);
  const context = useContext(DatasContext);


  const onShowModalWindow = () => {
    setShowModalWindow(true);
  }

  const closeModelWindow = () => {
    setShowModalWindow(false);
  }

  useEffect(() => {
    if (context.datas.length === 0) {
      return;
    }

    setIsButtonAnimated(true);

    const timer = setTimeout(() => {
      setIsButtonAnimated(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    }
  }, [context.datas]);

  return (
    <div className={isButtonAnimated ? styles.bump : ''}>
      <CartWindow
        show={showModalWindow}
        onCloseWindow={closeModelWindow}
      />
      <div>
        <button className={styles.button} onClick={onShowModalWindow}>
          <span className="material-icons">shopping_cart</span>
          <span>Cart</span>
          <span className={styles.numberAddedItems}>{context.datas.length}</span>
        </button>
      </div>
    </div>
  )
}

export default CartButton;