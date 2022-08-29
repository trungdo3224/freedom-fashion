import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles';

import { currentUserSelector } from "../../store/user/user.selector";

function Navigation() {
  const currentUser = useSelector(currentUserSelector);
 
  const { toggle } = useContext(CartContext);


  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {toggle && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};


export default Navigation;
