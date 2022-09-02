import { useDispatch,useSelector } from "react-redux/es/exports";
import { selectCartItems } from "../../store/cart/cart.selector";
import { FC } from "react";
import { addItemToCart } from "../../store/cart/cart.action"
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";
import { CategoryItem } from "../../store/categories/category.types";

type ProductCardProps = {
  product: CategoryItem
}

const ProductCard:FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, price, imageUrl } = product;

  const addProductToCart = () => {
   dispatch( addItemToCart(cartItems ,product));
  };
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
          Add to cart
        </Button>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
    </ProductCardContainer>
  );
};

export default ProductCard;
