import "./CartWindow.css";
import React from "react";
import ReactDOM from "react-dom";
import CartList from "./CartList";
import { useContext } from "react";
import DatasContext from '../context/datas-context';

const Backdrop = (props) => {
  return <div className="backgroundWindow" onClick={props.onCloseWindowBackground}></div>
}


const ModalWindow = (props) => {
  const contextData = useContext(DatasContext);

  let sum = 0;
  for (const data of contextData.datas) {
    sum += data.cost;
  }


  return (
    <div className="modalWindowContainer">
      {(contextData.datas.length !== 0) ? <CartList /> : <p className="emptyCart">Empty cart</p>}
      <div className="TotalWrapper">
        <div>Total</div>
        <div>${sum.toFixed(2)}</div>
      </div>
      <div className="buttonsWrapper">
        <button className="closeButton" onClick={props.onCloseWindow}>Close</button>
        {(contextData.datas.length !== 0) ? <button className="buyButton">Order</button> : null}
      </div>
    </div>
  )
}

const portalElement = document.getElementById("overlays");


const CartWindow = (props) => {
  const showModal = props.show;

  if (!showModal) {
    return null;
  }

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onCloseWindowBackground={props.onCloseWindow} />, portalElement)}
      {ReactDOM.createPortal(<ModalWindow onCloseWindow={props.onCloseWindow} />, portalElement)}
    </React.Fragment>
  )
}

export default CartWindow;