import { useNavigate } from "react-router-dom";
import { FC } from "react";
import { CategoryItemContainer, Body, BackgroundImage } from "./category-item.styles";

type CategoryProps = {
  id:number,
  title:string,
  imageUrl:string,
  route: string,
}

const CategoryItem:FC<CategoryProps> = ({title, imageUrl, route}) => {

  const navigate = useNavigate();

  const navigateHandler = () => navigate(route);
  return (
    <CategoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body onClick={navigateHandler}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryItemContainer>
  );
}

export default CategoryItem;
