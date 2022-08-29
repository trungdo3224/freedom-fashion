import styled from "styled-components";

export const BackgroundImage = styled.div`
width: 100%;
height: 100%;
background-size: cover;
background-position: center;
background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`

export const Body = styled.div`
height: 90px;
padding: 0 25px;
padding-top: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: rgb(12, 12, 12);
opacity: 1;
position: absolute;
h2 {
  font-weight: bold;
  margin: 0 6px 0;
  font-size: 22px;
  color: #f8f8f8;
  text-transform: uppercase;
}

p {
  font-weight: lighter;
  font-size: 16px;
  color: #f8f8f8;
}
`
export const CategoryItemContainer = styled.div`

min-width: 30%;
height: 360px;
flex: 1 1 auto;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid #f8f8f8;
margin: 0 7.5px 15px;
overflow: hidden;
background-repeat: no-repeat;
background-size: cover;
&:hover {
  cursor: pointer;

  & ${BackgroundImage} {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }

  & ${Body} {
    opacity: 0.9;
  }
}

&.large {
  height: 380px;
}

&:first-child {
  margin-right: 7.5px;
}

&:last-child {
  margin-left: 7.5px;
}

`
