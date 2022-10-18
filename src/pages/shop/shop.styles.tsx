import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Filter = styled.select`
  width: 200px;
  height: 40px;
  padding: 8px 8px;
  font-size: 20px;
  outline: none;
`;

export const FilterTypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 32px;
  align-items: flex-end;
`;

export const SearchBox = styled.input`
  width: 300px;
  height: 20px;
  padding: 8px 8px;
  font-size: 20px;
  outline: none;
`;
