import { styled, keyframes } from "styled-components";
import { css } from "styled-components";
import Link from "next/link";

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledHeadline = styled.h1`
  text-decoration: underline;
  font-size: 2.5rem;
  color: red;
  margin: 10px 30px;
  text-shadow: 0 0 5px orange;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const StyledDiv = styled.div`
  width: 30vw;
  min-width: 130px;
  max-width: 300px;
  color: blue;
  background-color: #6fd3ef;
  border: 3px black dashed;
  font-size: 2rem;
  cursor: pointer;
  border-radius: 5px;
`;

const rotate = keyframes`
  from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
`;

const StyledSpan = styled.span`
  display: inline-block;
  animation-name: ${({ $spinAnimation }) =>
    $spinAnimation
      ? css`
          ${rotate}
        `
      : ""};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;

const StyledParagraph = styled.p`
  color: #696969ff;
  font-size: 0.7rem;
  width: 30vw;
  margin: 5px 0 50px;
`;

export { StyledHeader, StyledHeadline, StyledSpan, StyledDiv, StyledParagraph };
