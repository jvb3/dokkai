import React from "react";
import "../styles.css";
import {
  Container,
  Option,
  SearchIcon,
  WordListIcon,
  TimerIcon,
  SaveIcon,
} from "../styles/Menu.styled";

function Menu({
  xCoords,
  yCoords,
  handleCloseMenu,
  fetchData,
  handleTimer,
  openDialogueBox,
  wordList,
}) {
  return (
    <Container
      onClick={() => handleCloseMenu()}
      className="menu"
      style={{ top: `${yCoords}px`, left: `${xCoords}px` }}
    >
      <Option onClick={() => fetchData()}>
        <SearchIcon />
        Look Up Word
      </Option>
      <Option onClick={wordList}>
        <WordListIcon />
        Display Word List
      </Option>
      <Option onClick={handleTimer}>
        <TimerIcon />
        Display Timer
      </Option>
      <Option onClick={openDialogueBox}>
        <SaveIcon />
        Save Work
      </Option>
    </Container>
  );
}

export default Menu;
