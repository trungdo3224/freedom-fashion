import { FC } from "react";
import { CategoryItem } from "../../redux/categories/category.types";
import ProductCard from "../product-card/product-card.component";
import { CatPreviewContainer ,Title, Preview} from "./category-preview.styles";

type CategoryPreviewProps = {
  title:string,
  products:CategoryItem[]
}

const CategoryPreview:FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <CatPreviewContainer>
      <h2>
        <Title to={title}>
          {title.toUpperCase()}
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
