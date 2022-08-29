import { useParams } from "react-router-dom";
import {  useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { categoriesMapSelector } from "../../store/categories/category.selector";
import {CategoryContainer,CategoryTitle } from "./category.styles";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(categoriesMapSelector)
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <>
      <CategoryTitle>{category.toLocaleUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
