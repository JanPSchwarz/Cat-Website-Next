import {
  StyledHeader,
  StyledHeadline,
  StyledSpan,
  StyledDiv,
  StyledParagraph,
} from "@/components/Header/Header.Style";

import Form from "../Form/Form";

import Link from "next/link";

export default function Header({
  hrefHeadline,
  hrefButton,
  spinAnimation,
  lastPage,
  indexPage,
  onChangeNumber,
}) {
  return (
    <StyledHeader>
      <a href={lastPage && hrefHeadline}>
        <StyledHeadline $lastPage={lastPage}>Cute-Cat-Generator</StyledHeadline>
      </a>

      {(lastPage || indexPage) && (
        <>
          <Link href={hrefButton} onClick={() => lastPage && reload()}>
            <StyledDiv>
              <StyledSpan $spinAnimation={spinAnimation}>😼</StyledSpan>
            </StyledDiv>
          </Link>
          <StyledParagraph>
            {lastPage ? "Brings you back to Homepage" : "Click for random Cats"}
          </StyledParagraph>
        </>
      )}
      {indexPage && <Form onChangeNumber={onChangeNumber} />}
    </StyledHeader>
  );
}
