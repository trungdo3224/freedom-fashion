import { useDispatch,useSelector } from "react-redux/es/exports";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action"
import Button from "../button/button.component";
import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
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
        <Button buttonType={"inverted"} onClick={addProductToCart}>
          Add to cart
        </Button>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
    </ProductCardContainer>
  );
};

export default ProductCard;
