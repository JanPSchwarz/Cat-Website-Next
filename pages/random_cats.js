import { StyledNote } from "@/components/CatBox/CatBox.styles";
import PageNavigation from "@/components/Navigations/PageNavigation";

import CatBox from "@/components/CatBox/CatBox";
import Header from "@/components/Header/Header";
import NavBar from "@/components/Navigations/NavBar";
import CatInSpace from "@/components/CatInSpaceGif/CatInSpaceGif.js";

export default function DisplayCats({
  isLoading,
  error,
  currentPage,
  lastPage,
  pageDown,
  pageUp,
  numberOfPages,
  catsPerSide,
  cats,
  onToggleLike,
  toggleDescription,
  show,
  likedCats,
  onChangeNumber,
}) {
  if (isLoading)
    return (
      <>
        <NavBar href1="/" href2="/favorite_cats" />
        <Header spinAnimation lastPage={true} hrefButton="" />
      </>
    );

  if (error)
    return (
      <h2>
        Error occurred: <br></br>
        {error.message}
      </h2>
    );

  const startIndex = 0 + currentPage * catsPerSide;
  const endIndex = startIndex + catsPerSide;
  // index-based specific selection of cats to give as props for catBox (via variables catsPerSide & currentPage from _app.js)
  const currentCats = cats.slice(startIndex, endIndex);

  return (
    <>
      <NavBar href1="/" href2="/favorite_cats" />
      <Header
        onChangeNumber={onChangeNumber}
        lastPage={lastPage}
        hrefButton="/"
        hrefHeadline="/"
      />
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
      />
      {lastPage && <CatInSpace />}
      <StyledNote>Made with ❤️</StyledNote>
    </>
  );
}
