import { StyledHeart } from "../Cat-Box/cat-box.styles";

export default function FavoriteButton({ onToggleLike, id, isFavorite }) {
  return (
    <StyledHeart
      $isFavorite={isFavorite}
      onClick={() => onToggleLike(id)}></StyledHeart>
  );
}
