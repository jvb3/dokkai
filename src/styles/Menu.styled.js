import styled from "styled-components";
import { TfiSearch } from "react-icons/tfi";
import { AiOutlineOrderedList } from "react-icons/ai";
import { MdOutlineTimer } from "react-icons/md";
import { BiSave } from "react-icons/bi";

export const Container = styled.div`
  background-color: ${(props) => props.theme.color.black};
  border: 1px solid ${(props) => props.theme.color.black};
  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.fontSize.extraSmall};
  width: auto;
  position: absolute;
  z-index: 9;
`;

export const SearchIcon = styled(TfiSearch)`
  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.black};
  }
`;
export const WordListIcon = styled(AiOutlineOrderedList)`
  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.black};
  }
`;
export const TimerIcon = styled(MdOutlineTimer)`
  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.black};
  }
`;
export const SaveIcon = styled(BiSave)`
  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.black};
  }
`;

export const Option = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  :hover {
    background-color: ${(props) => props.theme.color.white};
    color: ${(props) => props.theme.color.black};
    cursor: pointer;
    opacity: 0.8;
  }
`;
