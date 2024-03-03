import { StyledHeader, StyledHeadline, StyledDiv } from "@/pages";
import Link from "next/link";

export default function CatBoxHeader({ currentPage }) {
  return (
    <StyledHeader>
      <a href={currentPage === 5 ? "./Cats" : "./"}>
        <StyledHeadline
          style={{ marginBottom: currentPage === 5 ? null : "50px" }}>
          Cute-Cat-Generator
        </StyledHeadline>
      </a>
      <Link
        style={{ textDecoration: "none" }}
        href="./Cats"
        onClick={() => (currentPage === 5 ? location.reload() : null)}>
        {currentPage === 5 ? (
          <StyledDiv>
            <span>😼</span>
          </StyledDiv>
        ) : null}
      </Link>
    </StyledHeader>
  );
}
