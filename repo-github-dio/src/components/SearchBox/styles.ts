import styled from "styled-components";

interface ContainerProps {
  hasResponse: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: #fff;
  color: #000;
  border-radius: 6px;
  height: ${(props) => (props.hasResponse ? "400px" : "200px")};
  width: 600px;
  padding: 8px;
  transition: all 800ms;
`;
