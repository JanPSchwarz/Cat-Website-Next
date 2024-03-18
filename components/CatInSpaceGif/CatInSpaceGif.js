import Image from "next/image";
import CatInSpaceGif from "@/public/CatinSpace.gif";
import styled from "styled-components";

const StyledCatInSpace = styled(Image)`
  width: 35vw;
  min-width: 200px;
  max-width: 400px;
  height: auto;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function CatInSpace() {
  return (
    <StyledSection>
      <StyledCatInSpace alt="Cat in Space Gif" src={CatInSpaceGif} />
      <p>Congrats, you made it to the end 🎉</p>
    </StyledSection>
  );
}
