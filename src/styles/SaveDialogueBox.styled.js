import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid ${(props) => props.theme.color.black};
  border-radius: 3px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${(props) => props.boxPosition}px;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 10;
  background-color: ${(props) => props.theme.color.white};
  width: 400px;
`;

export const FormContainer = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  input {
    font-size: ${(props) => props.theme.fontSize.regular};
    display: block;
    width: 300px;
    border: 1px solid ${(props) => props.theme.color.black};
    background-color: ${(props) => props.theme.color.white};
    border-radius: 3px;
    outline: none;
    padding: 0.7rem;
    margin-top: 0.5rem;
  }
  label {
    color: ${(props) => props.theme.color.black};
    font-size: ${(props) => props.theme.fontSize.regular};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    margin-left: 2px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;
