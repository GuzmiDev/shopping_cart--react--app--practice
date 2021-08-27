import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, Switch, Route } from "react-router-dom";
import Home from "./componentes/Home";
import Blog from "./componentes/Blog";
import Store from "./componentes/Store";
import Error404 from "./componentes/Error404";
import ShoppingCart from "./componentes/ShoppingCart";

const App = () => {
  const products = [
    { id: 1, name: "Producto 1" },
    { id: 2, name: "Producto 2" },
    { id: 3, name: "Producto 3" },
    { id: 4, name: "Producto 4" },
    { id: 5, name: "Producto 5" },
  ];
  const [shoppingCartProduct, setShoppingCartProduct] = useState([]);

  const addProduct = (idProduct, name) => {
    if (shoppingCartProduct.length === 0) {
      setShoppingCartProduct([{ id: idProduct, name: name, amount: 1 }]);
    } else {
      const newShoppingCartProduct = [...shoppingCartProduct];

      const alreadyShoppingCart =
        newShoppingCartProduct.filter((product) => {
          return product.id === idProduct;
        }).length > 0;

      if (alreadyShoppingCart) {
        newShoppingCartProduct.forEach((product, index) => {
          if (product.id === idProduct) {
            const amountAdd = product.amount;
            newShoppingCartProduct[index] = {
              id: idProduct,
              name: name,
              amount: amountAdd + 1,
            };
          }
        });
      } else {
        newShoppingCartProduct.push({ id: idProduct, name: name, amount: 1 });
      }

      setShoppingCartProduct(newShoppingCartProduct);
    }
  };

  return (
    <Contenedor>
      <Menu>
        <NavLink to="/" exact={true}>
          Inicio
        </NavLink>
        <NavLink to="/Blog">Blog</NavLink>
        <NavLink to="/tienda">Tienda</NavLink>
      </Menu>
      <main>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/Blog" component={Blog} />
          <Route path="/Tienda">
            <Store
              products={products}
              setShoppingCartProduct={setShoppingCartProduct}
              addProduct={addProduct}
            />
          </Route>
          <Route component={Error404} />
        </Switch>
      </main>
      <aside>
        <ShoppingCart shoppingCartProduct={shoppingCartProduct} />
      </aside>
    </Contenedor>
  );
};
const Contenedor = styled.div`
  max-width: 1000px;
  padding: 40px;
  width: 90%;
  display: grid;
  gap: 20px;
  grid-template-columns: 2fr 1fr;
  background: #fff;
  margin: 40px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Menu = styled.nav`
  width: 100%;
  text-align: center;
  background: #092c4c;
  grid-column: span 2;
  border-radius: 3px;

  a {
    color: #fff;
    display: inline-block;
    padding: 15px 20px;
  }

  a:hover {
    background: #1d85e8;
    text-decoration: none;
  }
`;
export default App;
