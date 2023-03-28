import styled from "styled-components";

const OverlayStyled = styled.div`
  position: fixed;
  display: ${(props) => (props.showSaveDialogue ? "block" : "none")};
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
`;

export default OverlayStyled;
