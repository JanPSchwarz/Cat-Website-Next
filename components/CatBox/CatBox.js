import {
  StyledCard,
  StyledDivider,
  StyledImage,
  StyledImageBox,
  StyledListItem,
  StyledSpan,
  StyledUnList,
  StyledButton,
  StyledWrapper,
} from "./CatBox.styles";

import FavoriteButton from "../FavoriteButton/FavoriteButton";

// function implemented to make the component work for both the favorites page as well as the randomPage; gives liked cat if existing
function findLikedCat(object, catId) {
  const likedCat = object.find(({ id }) => id === catId);
  return likedCat;
}

export default function CatBox({
  cats,
  toggleDescription,
  show,
  onToggleLike,
  currentPage,
  catsPerSide,
  likedCats,
}) {
  return cats.map((cat, index) => {
    // checks object (useState) of liked Cats; used for toggling color of favoriteButton; implemented for randomCats page; unnecessary for favoriteCats page
    const likedCat = findLikedCat(likedCats, cat.id);

    // needed to give an individual index for toggling Description (see useState "show"  in _app.js) dependend on Page; otherwise description toggles for cat with same index on each page because currentCats insteadt of all fetched Cats are used for mapping; especially for randomCat Page
    const newIndex = index + currentPage * catsPerSide;

    // destructuring "cat"
    const { name, origin, temperament, description, wikipedia_url } =
      cat.breeds[0];

    // checks if index of last Item; for specific styles such as Divider
    const lastItem = index + 1 === cats.length;

    return (
      <>
        <StyledCard key={cat.id} $lastItem={lastItem}>
          <StyledImageBox>
            <StyledImage
              unoptimized
              src={cat.url}
              alt="cat"
              priority={true}
              loading="eager"
              width={600}
              height={600}
              onClick={() => {
                toggleDescription(newIndex);
              }}
              $show={show[newIndex]}
            />
            <StyledButton
              onClick={() => {
                toggleDescription(newIndex);
              }}
              $show={show[newIndex]}></StyledButton>
            <FavoriteButton
              isFavorite={likedCat ? true : false}
              onToggleLike={onToggleLike}
              id={cat.id}></FavoriteButton>
          </StyledImageBox>
          <StyledWrapper $show={show[newIndex]}>
            <StyledUnList $show={show[newIndex]}>
              <StyledListItem>
                Breed-Name:
                <StyledSpan>{name}</StyledSpan>
              </StyledListItem>

              <StyledListItem>
                Origin: <StyledSpan>{origin}</StyledSpan>
              </StyledListItem>

              <StyledListItem>
                Temperament: <StyledSpan>{temperament}</StyledSpan>
              </StyledListItem>

              <StyledListItem>
                Description: <StyledSpan>{description}</StyledSpan>
              </StyledListItem>

              <StyledListItem>
                <StyledSpan>
                  <a href={wikipedia_url} target="_blank" rel="noreferrer">
                    Wikipedia-Article
                  </a>
                </StyledSpan>
              </StyledListItem>
            </StyledUnList>
          </StyledWrapper>

          {!lastItem && <StyledDivider />}
        </StyledCard>
      </>
    );
  });
}
