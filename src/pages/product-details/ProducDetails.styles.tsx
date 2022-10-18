import styled from "styled-components";

export const ProductDetailsContainer = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 24px;
`
export const ProductImage = styled.div`
    background-image: url(${props => props.resource});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 40%;
    height: 400px;
`