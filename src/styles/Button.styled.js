import styled from "styled-components";

const Button = styled.button`
  padding: 0.75rem;
  margin: 1rem;
  border-radius: 3px;
  color: ${(props) => props.theme.color.white};
  background-color: ${(props) => props.theme.color.black};
  border: none;
  font-size: 18px;

  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.color.black};
    background-color: ${(props) => props.theme.color.white};
  }
`;

export const WordCardBtn = styled(Button)`
  margin: 0;
  width: 100%;
`;

export const SaveBtn = styled(Button)`
  margin: 0;
  animation: none;
  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.color.white};
    background-color: ${(props) => props.theme.color.black};
  }
`;

export default Button;
