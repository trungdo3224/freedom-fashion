import { CategoriesContainer } from "./categories-menu.styles";
import CategoryItem from "../category-item/category-item.component";
import categories from "../../categories.json";

export type CategoryProp = {
  id: number;
  title: string;
  imageUrl: string;
  route: string;
};

function CategoriesMenu() {
  return (
    <CategoriesContainer>
      {categories.map((category) => {
        const { id, title, imageUrl, route } = category;
        return <CategoryItem key={id} id={id} title={title} imageUrl={imageUrl} route={route} />;
      })}
    </CategoriesContainer>
  );
}

export default CategoriesMenu;
