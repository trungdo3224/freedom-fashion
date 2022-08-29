import { createContext, useReducer } from "react";
import { createAction } from "../utils/firebase/reducer/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
  //find if cartItems contains the productToAdd
  const existedCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  //if contained, increase the quantity
  if (existedCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //return new array with modified cartItems/ new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  //find if cartItems contains
  const existedCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  //if contained, decrease the quantity
  if (existedCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);


export const CartContext = createContext({
  toggle: false,
  setToggle: () => { },
  cartItems: [],
  addItemToCart: () => { },
});

const InitialState = {
  toggle: false,
  cartItems: [],
  itemsCount: 0,
  totalPrice: 0,
}

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_TOGGLE: "SET_TOGGLE",
}

export const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload
      }
    case CART_ACTION_TYPES.SET_TOGGLE:
      return {
        ...state,
        toggle: payload
      }
    default:
      throw new Error(`Unknown action type of ${type} from USER_ACTION_TYPES.`);
  }
}

export const CartProvider = ({ children }) => {

  const [{ cartItems, itemsCount, totalPrice, toggle }, dispatch] = useReducer(cartReducer, InitialState)


  const updateCartItemReducer = (newCartItems) => {
    const newCartItemsCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartTotalPrice = newCartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );

    dispatch(
      createAction(
        CART_ACTION_TYPES.SET_CART_ITEMS,
        {
          cartItems: newCartItems,
          itemsCount: newCartItemsCount,
          totalPrice: newCartTotalPrice,
        }
      )
    )
  }

  const setToggle = (bool) => {
    // dispatch({ type: CART_ACTION_TYPES.SET_TOGGLE, payload: bool })
    dispatch(createAction(CART_ACTION_TYPES.SET_TOGGLE, bool))
  }

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemReducer(newCartItems);
  };

  const removeItemFromCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartItemReducer(newCartItems);
  };

  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartItemReducer(newCartItems);
  };

  const value = {
    toggle,
    setToggle,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    itemsCount,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
