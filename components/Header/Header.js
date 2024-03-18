import {
  StyledHeader,
  StyledHeadline,
  StyledSpan,
  StyledDiv,
  StyledParagraph,
} from "@/components/Header/Header.Style";

export default function Header({
  hrefHeadline,
  hrefButton,
  spinAnimation,
  lastPage,
}) {
  return (
    <StyledHeader>
      <a href={lastPage && hrefHeadline}>
        <StyledHeadline $lastPage={lastPage}>
          Cute-Cat-Generator
        </StyledHeadline>
      </a>

      {lastPage && (
        <>
          <a href={hrefButton}>
            <StyledDiv>
              <StyledSpan $spinAnimation={spinAnimation}>😼</StyledSpan>
            </StyledDiv>
          </a>
          <StyledParagraph>Click for Random Cats</StyledParagraph>
        </>
      )}
    </StyledHeader>
  );
}
