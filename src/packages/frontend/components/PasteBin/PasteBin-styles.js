import styled from "styled-components";
export const Wrapper = styled.div`
  border-radius: 8px;
  min-height: 400px;
  background-color: #ffffff;
`;
export const TopBar = styled.div`
  border: 1px solid black;
  min-height: 40px;
  background-color: #343434;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  display: flex;
  justify-content: right;
  padding: 10px;
`;

export const Button = styled.button`
  color: #fff;
  padding: 3px 20px;
  background-color: #343434;
  border-radius: 8px;
  &:hover {
    background-color: #232323;
  }
`;
export const InputField = styled.textarea`
  padding: 10px;
  border: 0px;
  width: 100%;
  min-height: inherit;
  &:focus-visible {
    outline: 0px;
  }
`;
