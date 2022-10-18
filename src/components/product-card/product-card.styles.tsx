import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  margin-bottom: 100px;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }
  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`

export const Footer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    row-gap: 16px;
    width: 100%;
    height: 5%;
    font-size: 18px;
    text-align: center;
    margin-top: 15px;
`;

export const Name = styled.span`
      width: 100%;
      margin-bottom: 15px;
      font-weight: 700;
      font-size: 24px;
`;

export const Price = styled.span`
  width: 100%;
`;

