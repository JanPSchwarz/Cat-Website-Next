import styled from "styled-components";
import Image from "next/image";
import Heart from "../../public/heart.svg";
import Arrow from "../../public/swap-vertical.svg";

export const StyledHeart = styled(Heart)`
  width: 40px;
  padding: 5px;
  position: absolute;
  bottom: -20px;
  right: -25px;
  background-color: rgba(255, 235, 205, 1);
  border: 1px solid rgba(255, 166, 0, 1);
  border-radius: 50%;
  fill: ${({ $isFavorite }) =>
    $isFavorite ? "red" : "rgba(221, 23, 23, 0.4)"};
  transition: fill 0.3s ease-in-out;

  @media screen and (min-width: 700px) {
    width: 45px;
  }
`;

export const StyledImage = styled(Image)`
  position: relative;
  width: 60vw;
  height: auto;
  object-fit: contain;
  border: 2px solid black;
  box-shadow: 0 0 10px 4px orange;
  cursor: pointer;

  @media screen and (min-width: 700px) {
    width: 50vw;
  }

  @media screen and (min-width: 1000px) {
    width: 35vw;
  }
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  width: 60vw;
  min-width: 300px;
  max-width: 600px;
  padding: 10px;
  background-color: lightskyblue;
  border-radius: 5px;
  box-shadow: 0 0 10px 4px orange;
  border: 2px solid black;
  line-height: 1.5;
`;

export const StyledListItem = styled.li`
  min-height: 0;
  overflow: hidden;
  background-color: #ffebcd;
  margin: 3px;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 0 5px 0;
  font-size: 1.2rem;
`;

export const StyledSpan = styled.span`
  display: block;
  font-size: 1rem;
  margin-top: 5px;
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
  left: -50px;
  bottom: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: red;
  background-color: rgba(255, 248, 220, 0.5);
  box-shadow: 0 0 5px 2px rgb(255, 165, 0);
  border: 1px solid orange;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  transform: ${({ $show }) => ($show ? "rotate(180deg)" : null)};

  transition: transform 1s ease-in-out;

  &:hover {
    background-color: rgba(249, 230, 156, 0.4);
  }

  @media screen and (min-width: 700px) {
    width: 40px;
    height: 40px;
    left: -70px;
  }
`;
