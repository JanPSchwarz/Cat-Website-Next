import { StyledHeart } from "../CatBox/CatBox.styles";

export default function FavoriteButton({ onToggleLike, id, isFavorite }) {
  return (
    <StyledHeart
      $isFavorite={isFavorite}
      onClick={() => onToggleLike(id)}></StyledHeart>
  );
}
