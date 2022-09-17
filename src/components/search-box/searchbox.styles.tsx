import styled from "styled-components";
// import FormInput from "../form-input/form-input.component";

export const SearchBoxContainer = styled.div`
  width: 400px;
  height: 40px;
  border-radius: 5px;
  border: none;
`;


export const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    padding: 4px 12px;
    font-size: 20px;
    border-radius: 5px;
    border: none;

    &:focus {
        outline: none;
    }
`