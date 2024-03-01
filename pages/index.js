import styled from "styled-components";
import Link from "next/link";

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledHeadline = styled.h1`
  text-decoration: underline;
  font-size: 2.5rem;
  color: red;
  margin: 10px 30px;
  text-shadow: 0 0 5px orange;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const StyledDiv = styled.div`
  width: 30vw;
  min-width: 130px;
  max-width: 300px;
  color: blue;
  background-color: lightblue;
  border: 3px black dashed;
  font-size: 2rem;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 50px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function Home() {
  return (
    <StyledHeader>
      <StyledHeadline>Cute-Cat-Generator</StyledHeadline>
      <StyledLink href="/Cats">
        <StyledDiv>
          <span>😼</span>
        </StyledDiv>
      </StyledLink>
    </StyledHeader>
  );
}

export { StyledDiv, StyledHeader, StyledHeadline };
