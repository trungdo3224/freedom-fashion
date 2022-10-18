import { FC } from "react";
import { CategoryItem } from "../../redux/categories/category.types";
import ProductCard from "../product-card/product-card.component";
import { CatPreviewContainer ,Title, Preview} from "./category-preview.styles";

type CategoryPreviewProps = {
  title:string,
  products:CategoryItem[]
  priceOrder:string,
}

const CategoryPreview:FC<CategoryPreviewProps> = ({ title, products, priceOrder }) => {
  if (priceOrder === 'lth') {
    products = products.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
  } else if (priceOrder === 'htl') {
    products = products.sort((a, b) => (a.price > b.price) ? -1 : ((b.price > a.price) ? 1 : 0))
  }
  return (
    <CatPreviewContainer>
      <h2>
        <Title to={title}>
          {title.toUpperCase()} - SEE MORE
        </Title>
      </h2>
      <Preview>
        {products
          .filter((_, indx) => indx < 4)
          .map((product, id) => ( 
            <ProductCard key={id} product={product} />
          ))}
      </Preview>
    </CatPreviewContainer>
  );
};

export default CategoryPreview;
