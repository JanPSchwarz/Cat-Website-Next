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
    //only for random cats @ page cats.js

    // checks liked Cats and gives specific boolean for toggling color of favoriteButton
    const likedCat = likedCats.find(({ id }) => id === cat.id);

    // needed to give an individual index for toggling Description (see useState "show"  in _app.js) dependend on Page; otherwise description toggles for cat with same index on each page because currentCats insteadt of all fetched Cats are used for mapping
    const newIndex = index + currentPage * catsPerSide;

    // instead of destructuring "cat"
    const thisCat = cat.breeds[0];

    // checks if index of last Item; for specific styles as for instance the Divider
    const lastItem = index === cats.length - 1;

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
                <StyledSpan>{thisCat.name}</StyledSpan>
              </StyledListItem>

              <StyledListItem>
                Origin: <StyledSpan>{thisCat.origin}</StyledSpan>
              </StyledListItem>

              <StyledListItem>
                Temperament: <StyledSpan>{thisCat.temperament}</StyledSpan>
              </StyledListItem>

              <StyledListItem>
                Description: <StyledSpan>{thisCat.description}</StyledSpan>
              </StyledListItem>

              <StyledListItem>
                <StyledSpan>
                  <a
                    href={thisCat.wikipedia_url}
                    target="_blank"
                    rel="noreferrer">
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
