import styled from "styled-components";
import Image from "next/image";

export const StyledImage = styled(Image)`
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
  cursor: pointer;
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
