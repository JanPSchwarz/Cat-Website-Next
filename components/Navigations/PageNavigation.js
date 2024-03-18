import styled from "styled-components";

const StyledButtonDown = styled.button`
  font-size: 1.5rem;
  width: 35px;
  height: 35px;
  color: cornsilk;
  background-color: transparent;
  border: none;
  background-color: rgba(110, 96, 110, 0.5);
  border-radius: 999px;
  position: fixed;
  left: 5px;
  top: 50%;
  bottom: 50%;

  &:hover {
    background-color: rgba(110, 96, 110, 0.9);
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    width: 45px;
    height: 45px;
    left: 5%;
  }
`;

const StyledButtonUp = styled(StyledButtonDown)`
  right: 5px;
  left: unset;

  @media screen and (min-width: 768px) {
    right: 5%;
  }
`;

const StyledPageDisplay = styled.p`
  position: fixed;
  top: 10%;
  right: 2%;
  color: #956666;
  font-weight: 1000;
  background-color: rgb(255, 165, 0, 0.35);
  padding: 5px;
  border-radius: 10px;

  @media screen and (min-width: 1000px) {
    right: 15%;
  }
`;

export default function PageNavigation({
  pageDown,
  pageUp,
  currentPage,
  pages,
}) {
  return (
    <>
      {currentPage < pages ? (
        <StyledPageDisplay>
          {currentPage + 1} / {pages}
        </StyledPageDisplay>
      ) : null}
      {currentPage > 0 ? (
        <StyledButtonDown
          onClick={() => {
            pageDown();
          }}>
          &lt;
        </StyledButtonDown>
      ) : null}

      {currentPage < pages ? (
        <StyledButtonUp
          onClick={() => {
            pageUp();
          }}>
          &gt;
        </StyledButtonUp>
      ) : null}
    </>
  );
}
