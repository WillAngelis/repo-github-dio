import styled from "styled-components";

type LoadingProps = {
  size: number;
};

export const LoadingContainer = styled.div<LoadingProps>`
  display: inline-block;
  position: relative;
  width: ${({ size }) => (size ? `${size}px` : "80px")};
  height: ${({ size }) => (size ? `${size}px` : "80px")};

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${({ size }) => (size ? `${size}px` : "80px")};
    height: ${({ size }) => (size ? `${size}px` : "80px")};
    margin: 0;
    transition: all 0.5s;
    border: ${({ size }) => (size ? `${size / 8}px` : "80px")} solid #888;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #888 transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: 150ms;
  }
  div:nth-child(2) {
    animation-delay: 100ms;
  }
  div:nth-child(3) {
    animation-delay: 150ms;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingSpin = styled.div``;
