import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;

  const addProductToCart = () => {
    addItemToCart(product);
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
