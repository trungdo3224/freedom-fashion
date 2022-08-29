import { useContext } from "react";

import { CartIconContainer, ShoppingSvg, ItemCount } from "./cart-icon.styles";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { toggle, setToggle, itemsCount } = useContext(CartContext);

  const toggleCartOpen = () => setToggle(!toggle);
  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingSvg />
      <ItemCount>{itemsCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
