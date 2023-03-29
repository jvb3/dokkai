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
        <div>
          <label>My translation title:</label>
          <input value={title} onChange={titleInput} />
        </div>
        <div>
          <label>Date:</label>
          <input value={date} onChange={dateInput} />
        </div>
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
          Download
        </SaveDialogueBtn>
        <SaveDialogueBtn onClick={closeDialogueBox}>Cancel</SaveDialogueBtn>
      </BtnContainer>
    </Container>
  );
};

export default SaveDialogBox;
