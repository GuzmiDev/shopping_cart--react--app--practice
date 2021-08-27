const estadoInicial = {
  products: [
    { id: 1, name: "Producto A" },
    { id: 2, name: "Producto B" },
    { id: 3, name: "Producto C" },
    { id: 4, name: "Producto D" },
    { id: 5, name: "Producto E" },
  ],
  shoppingCartProduct: [],
};

const reducer = (state = estadoInicial, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const { name, idProduct } = action;

      if (state.shoppingCartProduct.length === 0) {
        return {
          ...state,
          shoppingCartProduct: [{ id: idProduct, name: name, amount: 1 }],
        };
      } else {
        const newShoppingCartProduct = [...state.shoppingCartProduct];

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
          newShoppingCartProduct.push({
            id: idProduct,
            name: name,
            amount: 1,
          });
        }
        return { ...state, shoppingCartProduct: newShoppingCartProduct };
      }

    default:
      return state;
  }
};

export default reducer;
