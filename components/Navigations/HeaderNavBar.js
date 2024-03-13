import styled from "styled-components";
import Link from "next/link";
import Heart from "@/public/heart-outline.svg";
import Home from "@/public/home-outline.svg";

const StyledNav = styled.nav`
  font-size: 0.8rem;
  position: absolute;
  top: 10px;
  left: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    top: 40px;
    left: 40px;
    flex-direction: row;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 3px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 5px;
  box-shadow: 0 0 3px 0 red;
  width: 40px;
  color: black;
  background-color: rgba(255, 255, 255, 0.601);

  @media screen and (min-width: 768px) {
    width: 60px;
  }
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  padding: 3px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 5px;
  box-shadow: 0 0 3px 0 red;
  width: 40px;
  color: black;
  background-color: rgba(255, 255, 255, 0.601);

  @media screen and (min-width: 768px) {
    width: 60px;
  }
`;

const StyledCat = styled(Heart)`
  width: 50%;
  height: 50%;
`;

const StyledHome = styled(Home)`
  width: 50%;
  height: 50%;
`;

export default function HeaderNavBar({ href1, href2 }) {
  return (
    <StyledNav>
      <StyledAnchor href="/">
        <StyledHome /> Home
      </StyledAnchor>
      <StyledLink href="/favorites">
        <StyledCat /> Cats
      </StyledLink>
    </StyledNav>
  );
}
