import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  padding: 16px;
  display: grid;
  flex-grow: 1;
  grid-template-columns: calc(50% - 200px) 400px calc(50% - 200px);
`;
