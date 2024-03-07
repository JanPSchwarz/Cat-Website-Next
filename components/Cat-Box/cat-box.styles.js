import styled from "styled-components";
import Image from "next/image";

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

export const StyledUnList = styled.ul`
  display: ${({ $show }) => ($show ? "flex" : "none")};
  flex-direction: column;
  list-style: none;
  width: 60vw;
  min-width: 300px;
  max-width: 600px;
  padding: 10px;
  background-color: lightskyblue;
  border-radius: 5px;
  box-shadow: 0 0 10px 4px orange;
  border: 2px solid black;
  line-height: 1.5;
  margin: 30px auto 50px;
`;

export const StyledListItem = styled.li`
  background-color: blanchedalmond;
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
  margin: 35px 0 70px;
`;

export const StyledNote = styled.p`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const StyledButton = styled.button`
  position: absolute;
  left: -30%;
  bottom: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.8rem;
  color: red;
  background-color: rgb(255, 248, 220, 0.8);
  box-shadow: 0 0 5px 2px orange;
  border: 1px solid orange;
  display: flex;
  justify-content: center;
  cursor: pointer;

  transform: ${({ $show }) => ($show ? "rotate(180deg)" : null)};

  transition: transform 0.3s ease-in-out;

  &:hover {
    background-color: rgb(255, 165, 0, 0.5);
  }
`;
