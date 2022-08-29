import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
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
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { name, price, imageUrl, quantity } = cartItem;

  const clearCartItemHandler = () => {
    dispatch(clearItemFromCart(cartItems,cartItem))
  };

  const addToCartHandler = () => {
    dispatch
      (addItemToCart(cartItems,cartItem))
  };

  const removeFromCartHandler = () => {
    dispatch(removeItemFromCart(cartItems,cartItem))
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
