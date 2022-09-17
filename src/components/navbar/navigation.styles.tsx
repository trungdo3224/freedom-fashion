import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding:10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 60%;
  width: 70px;
  padding: 10px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
  
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  font-weight: 600;
  cursor: pointer;
  color: #000000;

  &:hover {
    color: #a3a79f;
  }

  @media screen and (max-width: 800px) {}
`;