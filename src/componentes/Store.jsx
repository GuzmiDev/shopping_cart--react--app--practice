import React from "react";
import Products from "./Products";

const Store = ({ products, setShoppingCartProduct, addProduct }) => {
  return (
    <div>
      <h1>Tienda</h1>
      <Products
        products={products}
        setShoppingCartProduct={setShoppingCartProduct}
        addProduct={addProduct}
      />
    </div>
  );
};

export default Store;
