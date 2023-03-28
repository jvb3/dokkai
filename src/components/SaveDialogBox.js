import {
  Container,
  FormContainer,
  BtnContainer,
} from "../styles/SaveDialogueBox.styled";
import { SaveBtn as SaveDialogueBtn } from "../styles/Button.styled";
import useDownloadFile from "../hooks/useDownloadFile";

const SaveDialogBox = ({
  closeDialogueBox,
  boxPosition,
  pastedText,
  lineByLineTranslation,
  title,
  date,
  titleInput,
  dateInput,
  copiedPastedText,
}) => {
  const { makeDoc } = useDownloadFile();

  const translationArr = Object.values(lineByLineTranslation).join(" ");

  const newTranslation = {
    title: title,
    date: date,
    japaneseText: copiedPastedText,
    engTranslation: translationArr,
  };

  return (
    <Container boxPosition={boxPosition}>
      <FormContainer>
        <label>Title</label>
        <input value={title} onChange={titleInput} />
        <label>Date</label>
        <input value={date} onChange={dateInput} />
      </FormContainer>
      <BtnContainer>
        <SaveDialogueBtn
          onClick={() =>
            makeDoc(
              newTranslation.title,
              newTranslation.date,
              newTranslation.japaneseText,
              newTranslation.engTranslation
            )
          }
        >
          Ok
        </SaveDialogueBtn>
        <SaveDialogueBtn onClick={closeDialogueBox}>Cancel</SaveDialogueBtn>
      </BtnContainer>
    </Container>
  );
};

export default SaveDialogBox;
