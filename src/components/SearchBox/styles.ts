import styled from "styled-components";

interface ContainerProps {
  isSearching: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: #fff;
  color: #000;
  border-radius: 18px;
  height: ${(props) => (props.isSearching ? "400px" : "80px")};
  width: 600px;
  padding: 12px 24px;
  transition: all 900ms;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
