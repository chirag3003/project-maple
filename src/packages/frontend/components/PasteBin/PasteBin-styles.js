import styled from "styled-components";
export const Wrapper = styled.div`
  min-height: 320px;
  background-color: #ffffff;
  margin-right: 3rem;
  margin-top: 3rem;
`;
export const TopBar = styled.div`
  min-height: 4rem;
  background-color: #343434;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  display: flex;
  justify-content: right;
  padding: 10px;
  z-index: 10;  
`;

export const Button = styled.button`
  position: relative;
  color: #fff;
  padding: 3px 20px;
  background: var(--card-grad);
  margin: 0.5rem;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  display: flex;
  gap: 5px;
  transition: 0.2s ease-in-out;
  transform: scale(1);

  &:hover {
    transform: scale(0.98);
  }

  &:before{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 95%;
    height: 100%;
    background: inherit;
    filter: blur(0.2rem);
    border-radius: 2rem; 
    transform: translate(0.2rem, 0.4rem);
    opacity: 0.5;
    z-index: -1; 
  }
  
`;
export const InputField = styled.textarea`
  padding: 1rem;
  border: 0px;
  width: 100%;
  height: 20rem;
  border-radius: 1rem;
  filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
  &:focus-visible {
    outline: 0px;
  }

`;
