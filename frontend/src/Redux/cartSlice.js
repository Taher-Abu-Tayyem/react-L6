import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProducts: localStorage.getItem("selsectProducts")
    ? JSON.parse(localStorage.getItem("selsectProducts"))
    : [],
  selectedProductsID: localStorage.getItem("selsectProductsID")
    ? JSON.parse(localStorage.getItem("selsectProductsID"))
    : [],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      // state.value += action.payload;
      const productandQuantity = { ...action.payload, quantity: 1 };
      state.selectedProducts.push(productandQuantity);
      state.selectedProductsID.push(action.payload.id);
      console.log("done");
      localStorage.setItem(
        "selsectProducts",
        JSON.stringify(state.selectedProducts),
      );
      localStorage.setItem(
        "selsectProductsID",
        JSON.stringify(state.selectedProductsID),
      );
    },
    increaseQuantity: (state, action) => {
      // state.value += action.payload;
      const increaseProduct = state.selectedProducts.find((item) => {
        return item.id === action.payload.id;
      });
      increaseProduct.quantity += 1;
      localStorage.setItem(
        "selsectProducts",
        JSON.stringify(state.selectedProducts),
      );
      localStorage.setItem(
        "selsectProductsID",
        JSON.stringify(state.selectedProductsID),
      );
      console.log("done");
    },
    decreaseQuantity: (state, action) => {
      // state.value += action.payload;
      const increaseProduct = state.selectedProducts.find((item) => {
        return item.id === action.payload.id;
      });
      increaseProduct.quantity -= 1;
      if (increaseProduct.quantity === 0) {
        const newArr = state.selectedProducts.filter((item) => {
          return item.id !== action.payload.id;
        });
        const newArr2 = state.selectedProductsID.filter((item) => {
          return item !== action.payload.id;
        });
        state.selectedProducts = newArr;
        state.selectedProductsID = newArr2;
      }
      localStorage.setItem(
        "selsectProducts",
        JSON.stringify(state.selectedProducts),
      );
      localStorage.setItem(
        "selsectProductsID",
        JSON.stringify(state.selectedProductsID),
      );
      console.log("done");
    },
    deleteProdeuct: (state, action) => {
      // state.value += action.payload;
      const newArr = state.selectedProducts.filter((item) => {
        return item.id !== action.payload.id;
      });
      const newArr2 = state.selectedProductsID.filter((item) => {
        return item !== action.payload.id;
      });
      state.selectedProducts = newArr;
      state.selectedProductsID = newArr2;
      localStorage.setItem(
        "selsectProducts",
        JSON.stringify(state.selectedProducts),
      );
      localStorage.setItem(
        "selsectProductsID",
        JSON.stringify(state.selectedProductsID),
      );
      console.log("done");
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addProduct,
  increaseQuantity,
  decreaseQuantity,
  deleteProdeuct,
} = counterSlice.actions;

export default counterSlice.reducer;
