import { useState } from "react";
import { StyledDiv, StyledHeader, StyledHeadline } from ".";
import { StyledNote } from "@/components/Cat-Box/cat-box.styles";
import styled, { keyframes } from "styled-components";
import PageNavigation from "@/components/Navigations/PageNavigation";

import CatBox from "@/components/Cat-Box/CatBox";
import CatBoxHeader from "@/components/CatBoxHeader/CatBoxHeader";
import HeaderNavBar from "@/components/Navigations/HeaderNavBar";

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
  animation-name: ${rotate};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;

export default function DisplayCats({
  isLoading,
  error,
  currentPage,
  pageDown,
  pageUp,
  maxCats,
  numberOfPages,
  catsPerSide,
  cats,
  onToggleLike,
  toggleDescription,
  show,
  likedCats,
}) {
  if (isLoading)
    return (
      //Copy from initial index.js
      <StyledHeader>
        <StyledHeadline>Cute-Cat-Generator</StyledHeadline>
        <StyledDiv>
          <StyledSpan>😼</StyledSpan>
        </StyledDiv>
        <p style={{ position: "absolute", top: "200px" }}>Is Loading...</p>
      </StyledHeader>
    );

  if (error) return <h2>Error occurred...</h2>;

  const startIndex = 0 + currentPage * catsPerSide;
  const endIndex = startIndex + catsPerSide;
  const currentCats = cats.slice(startIndex, endIndex);

  return (
    <>
      <HeaderNavBar href1="/" href2="/favorite_cats" />
      <CatBoxHeader currentPage={currentPage} numberOfPages={numberOfPages} />
      <CatBox
        cats={currentCats}
        show={show}
        toggleDescription={toggleDescription}
        onToggleLike={onToggleLike}
        currentPage={currentPage}
        catsPerSide={catsPerSide}
        likedCats={likedCats}
      />
      <PageNavigation
        pages={numberOfPages}
        pageDown={pageDown}
        currentPage={currentPage}
        pageUp={pageUp}
        maxCats={maxCats}
      />
      <StyledNote>Made with ❤️</StyledNote>
    </>
  );
}
