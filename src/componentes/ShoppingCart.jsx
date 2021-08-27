import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const ShoppingCart = ({ shoppingCartProduct }) => {
  return (
    <div>
      <h3>Carrito de Compras</h3>
      {shoppingCartProduct.length > 0 ? (
        shoppingCartProduct.map((product, index) => {
          return (
            <Product key={index}>
              <ProductName>{product.name}</ProductName>
              Cantidad: {product.amount}
            </Product>
          );
        })
      ) : (
        <p>Aun no has agregado productos al carrito</p>
      )}
    </div>
  );
};

const Product = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ebebf3;
  font-size: 1.4rem;
`;

const ProductName = styled.p`
  font-weight: bold;
  font-size: 1.4rem;
  color: #000;
`;

const mapStateToProps = (state) => {
  return {
    shoppingCartProduct: state.shoppingCartProduct,
  };
};

export default connect(mapStateToProps)(ShoppingCart);
