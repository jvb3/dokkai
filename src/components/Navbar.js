import {
  Container as ContainerStyled,
  LinkStyled,
  LinksContainer,
} from "../styles/Navbar.styled";
import Timer from "./Timer";

export default function Navbar({ showTimer }) {
  return (
    <ContainerStyled>
      <LinksContainer>
        <LinkStyled to="/">Home</LinkStyled>

        <LinkStyled to="/j-text">Japanese Text</LinkStyled>
        <LinkStyled to="/translation">My Translation</LinkStyled>
        <LinkStyled to="/bilingual-view">Bilingual View</LinkStyled>
      </LinksContainer>
      <div>
        <Timer showTimer={showTimer} />
      </div>
    </ContainerStyled>
  );
}
