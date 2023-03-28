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
  width: 300px;
`;

export const FormContainer = styled.form`
  input {
    display: block;
    border: 1px solid ${(props) => props.theme.color.black};
    background-color: ${(props) => props.theme.color.white};
    border-radius: 3px;
    outline: none;
    padding: 0.4rem;
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
  }
  label {
    color: ${(props) => props.theme.color.black};
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;
