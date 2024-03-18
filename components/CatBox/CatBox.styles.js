import styled from "styled-components";
import Image from "next/image";
import Heart from "../../public/heart.svg";
import Arrow from "../../public/swap-vertical.svg";

export const StyledHeart = styled(Heart)`
  width: 40px;
  padding: 5px;
  position: absolute;
  bottom: -20px;
  right: -15px;
  background-color: rgba(255, 235, 205, 1);
  border: 1px solid rgba(255, 166, 0, 1);
  border-radius: 50%;
  fill: ${({ $isFavorite }) => ($isFavorite ? "red" : "#c3bfbfff")};
  transition: fill 0.3s ease-in-out;
  cursor: pointer;

  @media screen and (min-width: 700px) {
    width: 45px;
  }
`;

export const StyledImage = styled(Image)`
  position: relative;
  width: 70vw;
  height: auto;
  object-fit: contain;
  border: 2px solid black;
  box-shadow: 0 0 10px 4px orange;
  cursor: pointer;

  @media screen and (min-width: 500px) {
    width: 65vw;
    max-width: 700px;
  }
  @media screen and (min-width: 700px) {
    width: 55vw;
    max-width: 500px;
  }
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ $lastItem }) => ($lastItem ? "margin-bottom: 30px" : "")}
`;

export const StyledImageBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const StyledWrapper = styled.div`
  display: grid;
  overflow: hidden;
  grid-template-rows: ${({ $show }) => ($show ? "1fr" : "0fr")};
  transform: ${({ $show }) => ($show ? "scale(1)" : "scale(0)")};
  opacity: ${({ $show }) => ($show ? "100%" : "0%")};
  margin: ${({ $show }) => ($show ? "30px" : "0")};
  transition: grid-template-rows 1s ease-in-out, transform 1s ease-in-out,
    opacity 1s ease-in-out, margin 1s ease-in-out;
`;

export const StyledUnList = styled.ul`
  list-style: none;
  min-height: 0;
  overflow: hidden;
  width: 70vw;
  max-width: 600px;
  padding: 8px;
  /* background-color: #fa8bff; */
  background-image: linear-gradient(
    45deg,
    rgba(110, 106, 110, 0.7) 0%,
    rgba(43, 210, 255, 0.7) 52%,
    rgba(255, 203, 108, 0.8) 50%
  );

  border-radius: 5px;
  box-shadow: 0 0 5px 0px black;
  border: 1px solid black;
  line-height: 1.5;
`;

export const StyledListItem = styled.li`
  min-height: 0;
  overflow: hidden;
  background-image: linear-gradient(
    174.2deg,
    rgba(255, 244, 228, 1) 1.1%,
    rgba(255, 255, 255, 1) 97.4%
  );
  margin: 5px 0;
  padding: 4px;
  border-radius: 5px;
  box-shadow: 0 0 5px 0;
  font-size: 1rem;
`;

export const StyledSpan = styled.span`
  display: block;
  font-size: 1rem;
`;

export const StyledDivider = styled.div`
  height: 2px;
  width: 80vw;
  background-color: black;
  margin-bottom: 35px;
`;

export const StyledNote = styled.p`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const StyledButton = styled(Arrow)`
  position: absolute;
  fill: orange;
  left: -10px;
  bottom: -20px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: red;
  background-color: rgba(255, 248, 220, 1);
  box-shadow: 0 0 5px 2px rgb(255, 165, 0);
  border: 1px solid orange;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  transform: ${({ $show }) => ($show ? "rotate(180deg)" : null)};

  transition: transform 1s ease-in-out;

  &:hover {
    background-color: rgba(253, 240, 189, 1);
  }

  @media screen and (min-width: 700px) {
    width: 40px;
    height: 40px;
    left: -70px;
  }
`;
