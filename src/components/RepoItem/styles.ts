import styled from "styled-components";

export const Container = styled.div`
  border-bottom: 1px solid #cdcdcd;
  display: flex;
  align-items: center;
  padding: 12px 0;
`;

export const RepoImg = styled.img`
  border-radius: 12px;
  height: 40px;
  width: 40px;
  margin-right: 20px;
  background-color: #cdcdcd;
`;

export const RepoInfo = styled.div`
  h2 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 4px;
  }
  a {
    font-size: 14px;
    color: #3f94ff;

    :hover {
      cursor: pointer;
    }
  }
`;
