import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  color: #000;
  display: flex;
  align-items: center;
  border-radius: 6px;
  width: 100%;
  padding: 10px;
`;

export const Input = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  padding: 10px;
  ::placeholder {
    font-weight: 500;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  color: #444;
  font-size: 12px;
  font-weight: 700;
  text-decoration: underline;
  text-decoration-color: #444;
  cursor: pointer;

  :hover {
    color: #000;
    text-decoration-color: #000;
  }
`;
