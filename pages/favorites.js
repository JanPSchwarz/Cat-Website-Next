import FavoriteCats from "@/components/FavoriteCats/FavoriteCats";
import CatEmoji from "../public/cat-emoji.svg";
import styled from "styled-components";
import Header from "@/components/Header/Header";
import NavBar from "@/components/Navigations/NavBar";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledCatEmoji = styled(CatEmoji)`
  width: 50vw;
  max-width: 400px;
  height: auto;
  fill: black;
  margin-bottom: 50px;
`;

const StyledSection = styled.section`
  margin-top: 0;
`;

export default function favoriteCatsPage({
  likedCats,
  toggleDescription,
  show,
  onToggleLike,
}) {
  return (
    <StyledSection>
      <NavBar href1="/" href2="/" />
      <Header />
      {likedCats.length ? (
        <FavoriteCats
          likedCats={likedCats}
          toggleDescription={toggleDescription}
          show={show}
          onToggleLike={onToggleLike}
        />
      ) : (
        <Wrapper>
          <StyledCatEmoji></StyledCatEmoji>
          <h2>You don&apos;t like cats?...</h2>
        </Wrapper>
      )}
    </StyledSection>
  );
}
