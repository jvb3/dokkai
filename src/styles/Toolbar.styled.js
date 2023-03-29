import styled from "styled-components";
import { TfiSearch } from "react-icons/tfi";
import {
  AiOutlineOrderedList,
  AiOutlineTranslation,
  AiOutlineHome,
} from "react-icons/ai";
import { RxDoubleArrowRight, RxDoubleArrowLeft } from "react-icons/rx";
import { MdOutlineTimer } from "react-icons/md";
import { FaLanguage } from "react-icons/fa";
import { TbFileText } from "react-icons/tb";
import { BiSave } from "react-icons/bi";

export const ToolbarContainer = styled.section`
  flex-direction: row;
  align-items: center;
  height: 375px;
  display: flex;
  background-color: ${({ theme }) => theme.color.black};
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  position: fixed;
  left: 0%;
  top: 25%;
  z-index: 9;
`;
export const IconContainer = styled.div`
  display: ${(props) => (props.isToolbar ? "flex" : "none")};
  flex-direction: column;
  gap: 1.5rem;
  padding: 0 10px 0 10px;
`;

export const RtArrow = styled(RxDoubleArrowRight)`
  color: ${({ theme }) => theme.color.white};
  height: 18px;
  width: 18px;
  margin-right: 3px;
  :hover {
    cursor: pointer;
  }
`;
export const LtArrow = styled(RxDoubleArrowLeft)`
  color: ${({ theme }) => theme.color.white};
  height: 18px;
  width: 18px;
  margin-right: 3px;
  :hover {
    cursor: pointer;
  }
`;

export const HomeIcon = styled(AiOutlineHome)`
  color: ${({ theme }) => theme.color.white};
  height: 20px;
  width: 20px;
  :hover {
    cursor: pointer;
  }
`;

export const SearchIcon = styled(TfiSearch)`
  color: ${({ theme }) => theme.color.white};
  height: 20px;
  width: 20px;
  :hover {
    cursor: pointer;
  }
`;

export const WordListIcon = styled(AiOutlineOrderedList)`
  color: ${({ theme }) => theme.color.white};
  height: 20px;
  width: 20px;
  :hover {
    cursor: pointer;
  }
`;

export const BilingualIcon = styled(FaLanguage)`
  color: ${({ theme }) => theme.color.white};
  height: 20px;
  width: 20px;
  :hover {
    cursor: pointer;
  }
`;

export const TranslateIcon = styled(AiOutlineTranslation)`
  color: ${({ theme }) => theme.color.white};
  height: 20px;
  width: 20px;
  :hover {
    cursor: pointer;
  }
`;

export const TextIcon = styled(TbFileText)`
  color: ${({ theme }) => theme.color.white};
  height: 20px;
  width: 20px;
  :hover {
    cursor: pointer;
  }
`;

export const SaveIcon = styled(BiSave)`
  color: ${({ theme }) => theme.color.white};
  height: 20px;
  width: 20px;
  :hover {
    cursor: pointer;
  }
`;

export const TimerIcon = styled(MdOutlineTimer)`
  color: ${({ theme }) => theme.color.white};
  height: 20px;
  width: 20px;
  :hover {
    cursor: pointer;
  }
`;
