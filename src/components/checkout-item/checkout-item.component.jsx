import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';

const CheckOutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const { name, price, imageUrl, quantity } = cartItem;

  const clearCartItemHandler = () => {
    clearItemFromCart(cartItem);
  };

  const addToCartHandler = () => {
    addItemToCart(cartItem);
  };

  const removeFromCartHandler = () => {
    removeItemFromCart(cartItem);
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={removeFromCartHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addToCartHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={clearCartItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckOutItem;
