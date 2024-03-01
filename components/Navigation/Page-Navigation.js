import styled from "styled-components";

const StyledButtonDown = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  width: 40px;
  height: 40px;
  color: cornsilk;
  background-color: transparent;
  border: none;
  background-color: rgba(110, 96, 110, 0.5);
  border-radius: 999px;
  position: fixed;
  left: 20px;
  top: 50%;
  bottom: 50%;

  &:hover {
    background-color: rgba(110, 96, 110, 0.9);
    cursor: pointer;
  }
`;

const StyledButtonUp = styled(StyledButtonDown)`
  right: 20px;
  left: unset;
`;

function PageDown({ pageDown, children }) {
  return (
    <>
      <StyledButtonDown
        onClick={() => {
          pageDown();
        }}>
        {children}
      </StyledButtonDown>
    </>
  );
}
function PageUp({ pageUp, children }) {
  return (
    <>
      <StyledButtonUp
        onClick={() => {
          pageUp();
        }}>
        {children}
      </StyledButtonUp>
    </>
  );
}

export { PageDown, PageUp };
