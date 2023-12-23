import React from "react";
import * as S from "./Bar.styles";

function Bar() {
  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress></S.BarPlayerProgress>
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.BarPlayerControls>
              <S.BarButtonPrev>
                <S.BarButtonPrevSvg alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </S.BarButtonPrevSvg>
              </S.BarButtonPrev>
              <S.BarButtonPlay>
                <S.BarButtonPlaySvg alt="play">
                  <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                </S.BarButtonPlaySvg>
              </S.BarButtonPlay>
              <S.BarButtonNext>
                <S.BarButtonNextSvg alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </S.BarButtonNextSvg>
              </S.BarButtonNext>
              <S.BarButtonRepeat>
                <S.BarButtonRepeatSvg alt="repeat">
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                </S.BarButtonRepeatSvg>
              </S.BarButtonRepeat>
              <S.BarButtonShuffile>
                <S.BarButtonShuffileSvg alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                </S.BarButtonShuffileSvg>
              </S.BarButtonShuffile>
            </S.BarPlayerControls>

            <S.BarPlayerTrackPlay>
              <S.BarTrackPlayContain>
                <S.BarTrackPlayImage>
                  <S.BarTrackPlayImageSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.BarTrackPlayImageSvg>
                </S.BarTrackPlayImage>
                <S.BarTrackPlayAuthor>
                  <S.BarTrackPlayAuthorLink href="http://">
                    Ты та...
                  </S.BarTrackPlayAuthorLink>
                </S.BarTrackPlayAuthor>
                <S.BarTrackPlayAlbum>
                  <S.BarTrackPlayAlbumLink href="http://">
                    Баста
                  </S.BarTrackPlayAlbumLink>
                </S.BarTrackPlayAlbum>
              </S.BarTrackPlayContain>

              <S.BarTrackPlayLikeDis>
                <S.BarTrackPlay>
                  <S.BarTrackPlayLikeSvg alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </S.BarTrackPlayLikeSvg>
                </S.BarTrackPlay>
                <S.BarTrackPlayDislike>
                  <S.BarTrackPlayDislikeSvg alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                  </S.BarTrackPlayDislikeSvg>
                </S.BarTrackPlayDislike>
              </S.BarTrackPlayLikeDis>
            </S.BarPlayerTrackPlay>
          </S.BarPlayer>
          <S.BarVolumeBlockVolume>
            <S.BarVolumeContent>
              <S.BarVolumeImage>
                <S.BarVolumeSvg alt="volume">
                  <use xlinkHref="/img/icon/sprite.svg#icon-volume"></use>
                </S.BarVolumeSvg>
              </S.BarVolumeImage>
              <S.BarVolumeProgress>
                <S.BarVolumeProgressLine type="range" name="range" />
              </S.BarVolumeProgress>
            </S.BarVolumeContent>
          </S.BarVolumeBlockVolume>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
}
export default Bar;
