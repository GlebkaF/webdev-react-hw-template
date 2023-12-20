import React from "react";
import * as S from "./Search.styles";

function Search() {
  return (
    <S.MainCenterblock>
      <S.CenterblockSearch>
        <S.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </S.CenterblockSearch>
      <S.MainCenterblockH2>Треки</S.MainCenterblockH2>
    </S.MainCenterblock>
  );
}
export default Search;
