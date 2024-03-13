import FavoriteCats from "@/components/FavoriteCats/FavoriteCats";
import CatEmoji from "../public/cat-emoji.svg";
import styled from "styled-components";
import CatBoxHeader from "@/components/CatBoxHeader/CatBoxHeader";
import HeaderNavBar from "@/components/Navigations/HeaderNavBar";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledCatEmoji = styled(CatEmoji)`
  width: 50vw;
  height: auto;
  fill: black;
  margin-bottom: 50px;
`;

export default function favoriteCatsPage({
  likedCats,
  toggleDescription,
  show,
  onToggleLike,
}) {
  return (
    <section style={{ marginTop: "0" }}>
      <HeaderNavBar href1="/" href2="/" />
      <CatBoxHeader currentPage={null} />
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
    </section>
  );
}
