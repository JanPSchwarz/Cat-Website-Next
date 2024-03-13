import { StyledHeader, StyledHeadline, StyledDiv } from "@/pages";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import CatInSpace from "@/public/CatinSpace.gif";

const StyledCatInSpace = styled(Image)`
  width: 35vw;
  min-width: 200px;
  height: auto;
`;

export default function CatBoxHeader({ currentPage, numberOfPages }) {
  return (
    <StyledHeader>
      <a href={currentPage === numberOfPages ? "./cats" : "./"}>
        <StyledHeadline
          style={{
            marginBottom: currentPage === numberOfPages ? null : "50px",
          }}>
          Cute-Cat-Generator
        </StyledHeadline>
      </a>
      <Link
        style={{ textDecoration: "none" }}
        href="./cats"
        onClick={() =>
          currentPage === numberOfPages ? location.reload() : null
        }>
        {currentPage === numberOfPages ? (
          <StyledDiv>
            <span>😼</span>
          </StyledDiv>
        ) : null}
      </Link>
      {currentPage === numberOfPages ? (
        <>
          <StyledCatInSpace alt="Cat in Space Gif" src={CatInSpace} />
          <p style={{ marginBottom: "100px" }}>
            Congrats, you made it to the end 🎉
          </p>
        </>
      ) : null}
    </StyledHeader>
  );
}
