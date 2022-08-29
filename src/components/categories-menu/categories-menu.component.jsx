import {CategoriesContainer} from "./categories-menu.styles";
import CategoryItem from "../category-item/category-item.component"
import categories from "../../categories.json";;

function CategoriesMenu() {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
      <CategoryItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>
 );
}

export default CategoriesMenu;
