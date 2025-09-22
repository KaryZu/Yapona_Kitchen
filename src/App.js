import React, { useState } from "react";
import Header from "./components/Header";
import DescriptionCard from "./components/DescriptionCard";
import Meals from "./components/Meals";
import DatasContext from './context/datas-context';


function App() {
  const [cart, setCart] = useState([]);

  return (
    <DatasContext.Provider value={{ datas: cart, setDatas: setCart }}>
      <Header />
      <DescriptionCard />
      <Meals />
    </DatasContext.Provider>
  );
}

export default App;
