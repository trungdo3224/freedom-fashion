import { CategoryItem } from "../categories/category.types";
import { CART_ACTION_TYPES, CartItemType } from "./cart.types";
import {
  createAction,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer.utils";

// HELPERS UNDER
const addCartItem = (
  cartItems: CartItemType[],
  productToAdd: CategoryItem
): CartItemType[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (
  cartItems: CartItemType[],
  cartItemToRemove: CategoryItem
): CartItemType[] => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (
  cartItems: CartItemType[],
  cartItemToClear: CategoryItem
): CartItemType[] =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

// ACTUAL ACTIONS UNDER ==============

export const setCartItems = withMatcher(
  (cartItems: CartItemType[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = (
  cartItems: CartItemType[],
  productToAdd: CategoryItem
) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const removeItemFromCart = (
  cartItems: CartItemType[],
  cartItemToRemove: CategoryItem
) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return setCartItems(newCartItems);
};

export const clearItemFromCart = (
  cartItems: CartItemType[],
  cartItemToClear: CategoryItem
) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return setCartItems(newCartItems);
};

export const setIsCartOpen = withMatcher(
  (bool: boolean): SetIsCartOpen =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool)
);

// TYPES EXPORT UNDER =================
export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItemType[]
>;
