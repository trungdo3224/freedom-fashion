import { useDispatch, useSelector } from "react-redux/es/exports";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { FC } from "react";
import { addItemToCart } from "../../redux/cart/cart.action";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { toast } from "react-toastify";

import {
  ProductCardContainer,
  Footer,
  Name,
} from "./product-card.styles";
import { CategoryItem } from "../../redux/categories/category.types";

type ProductCardProps = {
  product: CategoryItem;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, price, imageUrl } = product;

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
    toast.success("Product added to cart!")
  };
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.base}
          onClick={addProductToCart}
        >
          Add to cart
        </Button>
        <Button buttonType={BUTTON_TYPE_CLASSES.base}>Details</Button>
        <Name>
          {name} - ${price}
        </Name>
      </Footer>
    </ProductCardContainer>
  );
};

export default ProductCard;
