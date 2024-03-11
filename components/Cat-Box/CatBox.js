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
} from "./cat-box.styles";

import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function CatBox({
  cats,
  toggleDescription,
  show,
  onToggleLike,
  currentPage,
  catsPerSide,
}) {
  return cats.map((cat, index) => {
    const thisCat = cat.breeds[0];
    const newIndex = index + currentPage * catsPerSide;
    return (
      <>
        <StyledCard key={cat.id}>
          <StyledImageBox>
            <StyledImage
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
              isFavorite={cat.isFavorite}
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

          <StyledDivider />
        </StyledCard>
      </>
    );
  });
}
