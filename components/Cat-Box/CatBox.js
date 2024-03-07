import {
  StyledCard,
  StyledDivider,
  StyledImage,
  StyledImageBox,
  StyledListItem,
  StyledSpan,
  StyledUnList,
  StyledButton,
} from "./cat-box.styles";

export default function CatBox({ cats, toggleDescription, show }) {
  return cats.map((cat, index) => {
    const thisCat = cat.breeds[0];
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
                toggleDescription(index);
              }}
              $show={show[index]}
            />
            <StyledButton
              onClick={() => {
                toggleDescription(index);
              }}
              $show={show[index]}>
              &darr;
            </StyledButton>
          </StyledImageBox>
          <StyledUnList $show={show[index]}>
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

          <StyledDivider />
        </StyledCard>
      </>
    );
  });
}
