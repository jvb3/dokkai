import {
  TextArea as TextAreaStyled,
  Container as ContainerStyled,
  Header as HeaderStyled,
  Period as PeriodStyled,
} from "../styles/PastedText.styled";
import Button from "../styles/Button.styled";
import { useRef } from "react";

function PastedText({
  showText,
  pastedText,
  validateInput,
  animateFirst,
  animateSecond,
  isFadeAnimation,
  handleFirstAnimationEnd,
  handlePastedText,
  copiedPastedText,
}) {
  const ref = useRef(null);

  return (
    <>
      <ContainerStyled isFadeAnimation={isFadeAnimation}>
        <HeaderStyled
          animateFirst={animateFirst}
          onAnimationEnd={handleFirstAnimationEnd}
        >
          Dokkai Training
          <PeriodStyled animateSecond={animateSecond}>
            {animateSecond ? "." : ""}
          </PeriodStyled>
        </HeaderStyled>
        {!showText && (
          <TextAreaStyled
            // pastedText={pastedText}
            animateFirst={animateFirst}
            autoFocus
            ref={ref}
            onChange={(e) => handlePastedText(e, ref)}
            placeholder={animateFirst ? "" : "Paste Japanese text here"}
          >
            {copiedPastedText}
          </TextAreaStyled>
        )}
        {!showText && pastedText && (
          <Button onClick={validateInput}>Start Studying</Button>
        )}
      </ContainerStyled>
    </>
  );
}

export default PastedText;
