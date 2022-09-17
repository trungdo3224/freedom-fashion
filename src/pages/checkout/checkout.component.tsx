import { useSelector } from "react-redux";
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selector";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total
} from "./checkout.styles";
import PaymentForm from "../../components/payment-form/payment-form.component";

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckOutItem cartItem={cartItem} />
      ))}
      {/* <Total>{totalPrice > 0 && `Total:$${totalPrice}`}</Total>
      {totalPrice > 0 && <PaymentForm/>} */}
      <Total>$ {totalPrice}</Total>
    </CheckoutContainer>
  );
};

export default CheckOut;
