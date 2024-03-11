import { StyledHeader, StyledHeadline, StyledDiv } from "@/pages";
import Link from "next/link";

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
    </StyledHeader>
  );
}
