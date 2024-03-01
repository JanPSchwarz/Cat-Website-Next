import useSWR from "swr";

import { useState } from "react";
import { StyledDiv, StyledHeader, StyledHeadline } from ".";
import { StyledNote } from "@/components/Cat-Box/cat-box.styles";
import styled, { keyframes } from "styled-components";
import { PageDown, PageUp } from "@/components/Navigation/Page-Navigation";

import CatBox from "@/components/Cat-Box/Cat-Box";
import Link from "next/link";

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
  cats,
  isLoading,
  error,
  currentPage,
  pageDown,
  pageUp,
}) {
  // stores boolean for description toggle
  const [show, setShow] = useState([]);

  if (isLoading)
    return (
      //Copy from initial index.js
      <StyledHeader>
        <StyledHeadline>Cute-Cat-Generator</StyledHeadline>
        <StyledDiv>
          <StyledSpan>😼</StyledSpan>
        </StyledDiv>
      </StyledHeader>
    );

  if (error) return <h2>Error occurred...</h2>;

  const startIndex = Math.min(10, currentPage * 10);
  const endIndex = startIndex + 10;
  const currentCats = cats.slice(startIndex, endIndex);

  // description toggle for every mapped cat
  function toggleDescription(index) {
    const updateShow = [...show];
    updateShow[index] = !updateShow[index];
    setShow(updateShow);
  }

  console.log(cats);
  console.log(currentCats);

  return (
    <>
      <Link href="./">
        <StyledHeadline style={{ marginBottom: "50px" }}>
          Cute-Cat-Generator
        </StyledHeadline>
      </Link>
      <CatBox
        cats={currentCats}
        show={show}
        toggleDescription={toggleDescription}
      />
      <PageDown pageDown={pageDown}>&lt;</PageDown>
      <PageUp pageUp={pageUp}>&gt;</PageUp>
      <StyledNote>Made with ❤️</StyledNote>
    </>
  );
}
