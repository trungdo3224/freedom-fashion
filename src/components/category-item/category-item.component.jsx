import { useNavigate } from "react-router-dom";
import { CategoryItemContainer, Body, BackgroundImage } from "./category-item.styles";

function CategoryItem({ category }) {

  const navigate = useNavigate();
  const { title, imageUrl, route } = category;

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
