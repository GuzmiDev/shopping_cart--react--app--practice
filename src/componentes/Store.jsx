import React from "react";
import Products from "./Products";

const Store = ({ products }) => {
  return (
    <div>
      <h1>Tienda</h1>
      <Products products={products} />
    </div>
  );
};

export default Store;
