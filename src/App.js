import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Products from "./components/Products/Products";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hola</h1>
        <Products/>
      </div>
    </Provider>
  );
}

export default App;
