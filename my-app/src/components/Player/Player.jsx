import React from "react";
import { useEffect, useState } from "react";
import SkeletonTrack from "../Skeleton/SkeletonTrack";
import "./style.css"
import { styled } from "styled-components";

const StyledMainCenterblock = styled.div`
display: flex;
flex-wrap: wrap;
width: auto;
-webkit-box-flex: 3;
-ms-flex-positive: 3;
flex-grow: 3;
padding: 20px 40px 20px 111px;
background-color: black;
`

const StyledCenterblockh2 = styled.h2`
font-style: normal;
font-weight: 400;
font-size: 64px;
line-height: 72px;
letter-spacing: -0.8px;
margin-bottom: 45px;
`
const StyledCenterblockContent = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
background-color: black;
`
const StyledContentTitle = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
margin-bottom: 24px;
`
const StyledPlaylistTitleCol = styled.div`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
letter-spacing: 2px;
color: #696969;
text-transform: uppercase;
`

const StyledPlaylistTitleCol01 = styled(StyledPlaylistTitleCol)`
width: 447px;
`
const StyledPlaylistTitleCol02 = styled(StyledPlaylistTitleCol)`
width: 321px;
`
const StyledPlaylistTitleCol03 = styled(StyledPlaylistTitleCol)`
width: 245px;
`
const StyledPlaylistTitleCol04 = styled(StyledPlaylistTitleCol)`
width: 60px;
text-align: end;
`
const StyledPlaylistTitleSvg = styled.svg`
width: 12px;
height: 12px;
fill: transparent;
stroke: #696969;
`
const StyledContentPlaylist = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
overflow-y: auto;
`
const StyledPlaylistItem = styled.div`
width: 100%;
display: block;
margin-bottom: 12px;
`
const StyledPlaylistTrack = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
`
const StyledTrackTitle = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
width: 447px;
`
const StyledTrackTitleImage = styled.div`
width: 51px;
height: 51px;
padding: 16px;
background: #313131;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
margin-right: 17px;
`
const StyledTrackTitleSvg = styled.svg`
width: 18px;
height: 17px;
fill: transparent;
stroke: #4e4e4e;
`
const StyledTrackTitleLink = styled.a`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #ffffff;
`
const StyledTrackTitleSpan = styled.span`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #4e4e4e;
`
const StyledTrackAuthor = styled.div`
width: 321px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;
`
const StyledTrackAuthorLink = styled.a`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #696969;
text-align: left;
`
const StyledTrackAlbum = styled.div`
width: 245px;
`
const StyledTrackAlbumLink = styled.a`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #696969;
`
const StyledTrackTimeSvg = styled.svg`
width: 14px;
height: 12px;
margin-right: 17px;
fill: transparent;
stroke: #696969;
`
const StyledTrackTimeText = styled.span`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-align: right;
color: #696969;
`
const StyledTrackTime = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
`
const StyledTrackTitleText = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
width: 447px;
`
//const StyledMainCenterblock = styled.div``

function Player(props) {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading)
    return (
      <StyledMainCenterblock>
        <StyledCenterblockh2>{props.namePage}</StyledCenterblockh2>
        <StyledCenterblockContent>
          <StyledContentTitle className="content__title playlist-title">
            <StyledPlaylistTitleCol01>Трек</StyledPlaylistTitleCol01>
            <StyledPlaylistTitleCol02>ИСПОЛНИТЕЛЬ</StyledPlaylistTitleCol02>
            <StyledPlaylistTitleCol03>АЛЬБОМ</StyledPlaylistTitleCol03>
            <StyledPlaylistTitleCol04>
              <StyledPlaylistTitleSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
              </StyledPlaylistTitleSvg>
            </StyledPlaylistTitleCol04>
          </StyledContentTitle>
        </StyledCenterblockContent>
        <SkeletonTrack />
      </StyledMainCenterblock>
    );

  return (
    <StyledMainCenterblock>
      <StyledCenterblockh2>{props.namePage}</StyledCenterblockh2>

      <StyledCenterblockContent>
        <StyledContentTitle>
          <StyledPlaylistTitleCol01>Трек</StyledPlaylistTitleCol01>
          <StyledPlaylistTitleCol02>ИСПОЛНИТЕЛЬ</StyledPlaylistTitleCol02>
          <StyledPlaylistTitleCol03>АЛЬБОМ</StyledPlaylistTitleCol03>
          <StyledPlaylistTitleCol04>
            <StyledPlaylistTitleSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </StyledPlaylistTitleSvg>
          </StyledPlaylistTitleCol04>
        </StyledContentTitle>
        <StyledContentPlaylist>
          <StyledPlaylistItem>
            <StyledPlaylistTrack>
              <StyledTrackTitle>
                <StyledTrackTitleImage>
                  <StyledTrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </StyledTrackTitleSvg>
                </StyledTrackTitleImage>
                <StyledTrackTitleText>
                  <StyledTrackTitleLink href="http://">
                    Guilt <StyledTrackTitleSpan></StyledTrackTitleSpan>
                  </StyledTrackTitleLink>
                </StyledTrackTitleText>
              </StyledTrackTitle>
              <StyledTrackAuthor>
                <StyledTrackAuthorLink href="http://">
                  Nero
                </StyledTrackAuthorLink>
              </StyledTrackAuthor>
              <StyledTrackAlbum>
                <StyledTrackAlbumLink href="http://">
                  Welcome Reality
                </StyledTrackAlbumLink>
              </StyledTrackAlbum>
              <StyledTrackTime>
                <StyledTrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </StyledTrackTimeSvg>
                <StyledTrackTimeText >4:44</StyledTrackTimeText>
              </StyledTrackTime>
            </StyledPlaylistTrack>
          </StyledPlaylistItem>

          <StyledPlaylistItem>
            <StyledPlaylistTrack>
              <StyledTrackTitle>
                <StyledTrackTitleImage>
                  <StyledTrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </StyledTrackTitleSvg>
                </StyledTrackTitleImage>
                <StyledTrackTitleText>
                  <StyledTrackTitleLink href="http://">
                    Elektro <StyledTrackTitleSpan></StyledTrackTitleSpan>
                  </StyledTrackTitleLink>
                </StyledTrackTitleText>
              </StyledTrackTitle>
              <StyledTrackAuthor>
                <StyledTrackAuthorLink href="http://">
                  Dynoro, Outwork, Mr. Gee
                </StyledTrackAuthorLink>
              </StyledTrackAuthor>
              <StyledTrackAlbum>
                <StyledTrackAlbumLink href="http://">
                  Elektro
                </StyledTrackAlbumLink>
              </StyledTrackAlbum>
              <StyledTrackTime>
                <StyledTrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </StyledTrackTimeSvg>
                <StyledTrackTimeText>2:22</StyledTrackTimeText>
              </StyledTrackTime>
            </StyledPlaylistTrack>
          </StyledPlaylistItem>

          <StyledPlaylistItem>
            <StyledPlaylistTrack>
              <StyledTrackTitle>
                <StyledTrackTitleImage>
                  <StyledTrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </StyledTrackTitleSvg>
                </StyledTrackTitleImage>
                <StyledTrackTitleText>
                  <StyledTrackTitleLink href="http://">
                    I’m Fire <StyledTrackTitleSpan></StyledTrackTitleSpan>
                  </StyledTrackTitleLink>
                </StyledTrackTitleText>
              </StyledTrackTitle>
              <StyledTrackAuthor>
                <StyledTrackAuthorLink href="http://">
                  Ali Bakgor
                </StyledTrackAuthorLink>
              </StyledTrackAuthor>
              <StyledTrackAlbum>
                <StyledTrackAlbumLink href="http://">
                  I’m Fire
                </StyledTrackAlbumLink>
              </StyledTrackAlbum>
              <StyledTrackTime>
                <StyledTrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </StyledTrackTimeSvg>
                <StyledTrackTimeText>2:22</StyledTrackTimeText>
              </StyledTrackTime>
            </StyledPlaylistTrack>
          </StyledPlaylistItem>

          <StyledPlaylistItem>
            <StyledPlaylistTrack>
              <StyledTrackTitle>
                <StyledTrackTitleImage>
                  <StyledTrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </StyledTrackTitleSvg>
                </StyledTrackTitleImage>
                <StyledTrackTitleText>
                  <StyledTrackTitleLink href="http://">
                    Non Stop
                    <StyledTrackTitleSpan>(Remix)</StyledTrackTitleSpan>
                  </StyledTrackTitleLink>
                </StyledTrackTitleText>
              </StyledTrackTitle>
              <StyledTrackAuthor>
                <StyledTrackAuthorLink href="http://">
                  Стоункат, Psychopath
                </StyledTrackAuthorLink>
              </StyledTrackAuthor>
              <StyledTrackAlbum>
                <StyledTrackAlbumLink href="http://">
                  Non Stop
                </StyledTrackAlbumLink>
              </StyledTrackAlbum>
              <StyledTrackTime>
                <StyledTrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </StyledTrackTimeSvg>
                <StyledTrackTimeText >4:12</StyledTrackTimeText>
              </StyledTrackTime>
            </StyledPlaylistTrack>
          </StyledPlaylistItem>

          <StyledPlaylistItem>
            <StyledPlaylistTrack>
              <StyledTrackTitle>
                <StyledTrackTitleImage>
                  <StyledTrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </StyledTrackTitleSvg>
                </StyledTrackTitleImage>
                <StyledTrackTitleText>
                  <StyledTrackTitleLink href="http://">
                    Run Run
                    <StyledTrackTitleSpan>(feat. AR/CO)</StyledTrackTitleSpan>
                  </StyledTrackTitleLink>
                </StyledTrackTitleText>
              </StyledTrackTitle>
              <StyledTrackAuthor>
                <StyledTrackAuthorLink href="http://">
                  Jaded, Will Clarke, AR/CO
                </StyledTrackAuthorLink>
              </StyledTrackAuthor>
              <StyledTrackAlbum>
                <StyledTrackAlbumLink href="http://">
                  Run Run
                </StyledTrackAlbumLink>
              </StyledTrackAlbum>
              <StyledTrackTime>
                <StyledTrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </StyledTrackTimeSvg>
                <StyledTrackTimeText>2:54</StyledTrackTimeText>
              </StyledTrackTime>
            </StyledPlaylistTrack>
          </StyledPlaylistItem>

          <StyledPlaylistItem>
            <StyledPlaylistTrack>
              <StyledTrackTitle>
                <StyledTrackTitleImage>
                  <StyledTrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </StyledTrackTitleSvg>
                </StyledTrackTitleImage>
                <StyledTrackTitleText>
                  <StyledTrackTitleLink href="http://">
                    Eyes on Fire
                    <StyledTrackTitleSpan>(Zeds Dead Remix)</StyledTrackTitleSpan>
                  </StyledTrackTitleLink>
                </StyledTrackTitleText>
              </StyledTrackTitle>
              <StyledTrackAuthor>
                <StyledTrackAuthorLink href="http://">
                  Blue Foundation, Zeds Dead
                </StyledTrackAuthorLink>
              </StyledTrackAuthor>
              <StyledTrackAlbum>
                <StyledTrackAlbumLink href="http://">
                  Eyes on Fire
                </StyledTrackAlbumLink>
              </StyledTrackAlbum>
              <StyledTrackTime>
                <StyledTrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </StyledTrackTimeSvg>
                <StyledTrackTimeText>5:20</StyledTrackTimeText>
              </StyledTrackTime>
            </StyledPlaylistTrack>
          </StyledPlaylistItem>

          <StyledPlaylistItem>
            <StyledPlaylistTrack>
              <StyledTrackTitle>
                <StyledTrackTitleImage>
                  <StyledTrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </StyledTrackTitleSvg>
                </StyledTrackTitleImage>
                <StyledTrackTitleText>
                  <StyledTrackTitleLink href="http://">
                    Mucho Bien
                    <StyledTrackTitleSpan>
                      (Hi Profile Remix)
                    </StyledTrackTitleSpan>
                  </StyledTrackTitleLink>
                </StyledTrackTitleText>
              </StyledTrackTitle>
              <StyledTrackAuthor>
                <StyledTrackAuthorLink href="http://">
                  HYBIT, Mr. Black, Offer Nissim, Hi Profile
                </StyledTrackAuthorLink>
              </StyledTrackAuthor>
              <StyledTrackAlbum>
                <StyledTrackAuthorLink href="http://">
                  Mucho Bien
                </StyledTrackAuthorLink>
              </StyledTrackAlbum>
              <StyledTrackTime>
                <StyledTrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </StyledTrackTimeSvg>
                <StyledTrackTimeText>3:41</StyledTrackTimeText>
              </StyledTrackTime>
            </StyledPlaylistTrack>
          </StyledPlaylistItem>

          <StyledPlaylistItem>
            <StyledPlaylistTrack>
              <StyledTrackTitle>
                <StyledTrackTitleImage>
                  <StyledTrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </StyledTrackTitleSvg>
                </StyledTrackTitleImage>
                <StyledTrackTitleText>
                  <StyledTrackTitleLink href="http://">
                    Knives n Cherries
                    <StyledTrackTitleSpan></StyledTrackTitleSpan>
                  </StyledTrackTitleLink>
                </StyledTrackTitleText>
              </StyledTrackTitle>
              <StyledTrackAuthor>
                <StyledTrackAuthorLink href="http://">
                  minthaze
                </StyledTrackAuthorLink>
              </StyledTrackAuthor>
              <StyledTrackAlbum>
                <StyledTrackAuthorLink  href="http://">
                  Captivating
                </StyledTrackAuthorLink>
              </StyledTrackAlbum>
              <StyledTrackTime>
                <StyledTrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </StyledTrackTimeSvg>
                <StyledTrackTimeText>1:48</StyledTrackTimeText>
              </StyledTrackTime>
            </StyledPlaylistTrack>
          </StyledPlaylistItem>

          <StyledPlaylistItem>
            <StyledPlaylistTrack>
              <StyledTrackTitle>
                <StyledTrackTitleImage>
                  <StyledTrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </StyledTrackTitleSvg>
                </StyledTrackTitleImage>
                <StyledTrackTitleText>
                  <StyledTrackTitleLink href="http://">
                    Knives n Cherries
                    <StyledTrackTitleSpan></StyledTrackTitleSpan>
                  </StyledTrackTitleLink>
                </StyledTrackTitleText>
              </StyledTrackTitle>
              <StyledTrackAuthor>
                <StyledTrackAuthorLink href="http://">
                  minthaze
                </StyledTrackAuthorLink>
              </StyledTrackAuthor>
              <StyledTrackAlbum>
                <StyledTrackAuthorLink href="http://">
                  Captivating
                </StyledTrackAuthorLink>
              </StyledTrackAlbum>
              <StyledTrackTime>
                <StyledTrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </StyledTrackTimeSvg>
                <StyledTrackTimeText>1:48</StyledTrackTimeText>
              </StyledTrackTime>
            </StyledPlaylistTrack>
          </StyledPlaylistItem>
          <StyledPlaylistItem>
            <StyledPlaylistTrack>
              <StyledTrackTitle>
                <StyledTrackTitleImage>
                  <StyledTrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </StyledTrackTitleSvg>
                </StyledTrackTitleImage>
                <StyledTrackTitleText>
                  <StyledTrackTitleLink href="http://">
                    Knives n Cherries
                    <StyledTrackTitleSpan></StyledTrackTitleSpan>
                  </StyledTrackTitleLink>
                </StyledTrackTitleText>
              </StyledTrackTitle>
              <StyledTrackAuthor>
                <StyledTrackAuthorLink href="http://">
                  minthaze
                </StyledTrackAuthorLink>
              </StyledTrackAuthor>
              <StyledTrackAlbum>
                <StyledTrackAuthorLink href="http://">
                  Captivating
                </StyledTrackAuthorLink>
              </StyledTrackAlbum>
              <StyledTrackTime>
                <StyledTrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </StyledTrackTimeSvg>
                <StyledTrackTimeText>1:48</StyledTrackTimeText>
              </StyledTrackTime>
            </StyledPlaylistTrack>
          </StyledPlaylistItem>
          <StyledPlaylistItem>
            <StyledPlaylistTrack>
              <StyledTrackTitle>
                <StyledTrackTitleImage>
                  <StyledTrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </StyledTrackTitleSvg>
                </StyledTrackTitleImage>
                <StyledTrackTitleText>
                  <StyledTrackTitleLink href="http://">
                    Knives n Cherries
                    <StyledTrackTitleSpan></StyledTrackTitleSpan>
                  </StyledTrackTitleLink>
                </StyledTrackTitleText>
              </StyledTrackTitle>
              <StyledTrackAuthor>
                <StyledTrackAuthorLink href="http://">
                  minthaze
                </StyledTrackAuthorLink>
              </StyledTrackAuthor>
              <StyledTrackAlbum>
                <StyledTrackAuthorLink href="http://">
                  Captivating
                </StyledTrackAuthorLink>
              </StyledTrackAlbum>
              <StyledTrackTime>
                <StyledTrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </StyledTrackTimeSvg>
                <StyledTrackTimeText>1:48</StyledTrackTimeText>
              </StyledTrackTime>
            </StyledPlaylistTrack>
          </StyledPlaylistItem>
          <StyledPlaylistItem>
            <StyledPlaylistTrack>
              <StyledTrackTitle>
                <StyledTrackTitleImage>
                  <StyledTrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </StyledTrackTitleSvg>
                </StyledTrackTitleImage>
                <StyledTrackTitleText>
                  <StyledTrackTitleLink href="http://">
                    Knives n Cherries
                    <StyledTrackTitleSpan></StyledTrackTitleSpan>
                  </StyledTrackTitleLink>
                </StyledTrackTitleText>
              </StyledTrackTitle>
              <StyledTrackAuthor>
                <StyledTrackAuthorLink href="http://">
                  minthaze
                </StyledTrackAuthorLink>
              </StyledTrackAuthor>
              <StyledTrackAlbum>
                <StyledTrackAuthorLink href="http://">
                  Captivating
                </StyledTrackAuthorLink>
              </StyledTrackAlbum>
              <StyledTrackTime>
                <StyledTrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </StyledTrackTimeSvg>
                <StyledTrackTimeText>1:48</StyledTrackTimeText>
              </StyledTrackTime>
            </StyledPlaylistTrack>
          </StyledPlaylistItem>
          <StyledPlaylistItem>
            <StyledPlaylistTrack>
              <StyledTrackTitle>
                <StyledTrackTitleImage>
                  <StyledTrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </StyledTrackTitleSvg>
                </StyledTrackTitleImage>
                <StyledTrackTitleText>
                  <StyledTrackTitleLink href="http://">
                    Knives n Cherries
                    <StyledTrackTitleSpan></StyledTrackTitleSpan>
                  </StyledTrackTitleLink>
                </StyledTrackTitleText>
              </StyledTrackTitle>
              <StyledTrackAuthor>
                <StyledTrackAuthorLink href="http://">
                  minthaze
                </StyledTrackAuthorLink>
              </StyledTrackAuthor>
              <StyledTrackAlbum>
                <StyledTrackAlbumLink href="http://">
                  Captivating
                </StyledTrackAlbumLink>
              </StyledTrackAlbum>
              <StyledTrackTime>
                <StyledTrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </StyledTrackTimeSvg>
                <StyledTrackTimeText>1:48</StyledTrackTimeText>
              </StyledTrackTime>
            </StyledPlaylistTrack>
          </StyledPlaylistItem>
          <StyledPlaylistItem>
            <StyledPlaylistTrack>
              <StyledTrackTitle>
                <StyledTrackTitleImage>
                  <StyledTrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </StyledTrackTitleSvg>
                </StyledTrackTitleImage>
                <StyledTrackTitleText>
                  <StyledTrackTitleLink  href="http://">
                    Knives n Cherries
                    <StyledTrackTitleSpan></StyledTrackTitleSpan>
                  </StyledTrackTitleLink>
                </StyledTrackTitleText>
              </StyledTrackTitle>
              <StyledTrackAuthor>
                <StyledTrackAuthorLink href="http://">
                  minthaze
                </StyledTrackAuthorLink>
              </StyledTrackAuthor>
              <StyledTrackAlbum>
                <StyledTrackAlbumLink href="http://">
                  Captivating
                </StyledTrackAlbumLink>
              </StyledTrackAlbum>
              <StyledTrackTime>
                <StyledTrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </StyledTrackTimeSvg>
                <StyledTrackTimeText>1:48</StyledTrackTimeText>
              </StyledTrackTime>
            </StyledPlaylistTrack>
          </StyledPlaylistItem>

          <StyledPlaylistItem>
            <StyledPlaylistTrack>
              <StyledTrackTitle>
                <StyledTrackTitleImage>
                  <StyledTrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </StyledTrackTitleSvg>
                </StyledTrackTitleImage>
                <StyledTrackTitleText>
                  <StyledTrackTitleLink href="http://">
                    How Deep Is Your Love
                    <StyledTrackTitleSpan></StyledTrackTitleSpan>
                  </StyledTrackTitleLink>
                </StyledTrackTitleText>
              </StyledTrackTitle>
              <StyledTrackAuthor>
                <StyledTrackAuthorLink href="http://">
                  Calvin Harris, Disciples
                </StyledTrackAuthorLink>
              </StyledTrackAuthor>
              <StyledTrackAlbum>
                <StyledTrackAlbumLink href="http://">
                  How Deep Is Your Love
                </StyledTrackAlbumLink>
              </StyledTrackAlbum>
              <StyledTrackTime>
                <StyledTrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </StyledTrackTimeSvg>
                <StyledTrackTimeText>3:32</StyledTrackTimeText>
              </StyledTrackTime>
            </StyledPlaylistTrack>
          </StyledPlaylistItem>

          <StyledPlaylistItem>
            <StyledPlaylistTrack>
              <StyledTrackTitle>
                <StyledTrackTitleImage>
                  <StyledTrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </StyledTrackTitleSvg>
                </StyledTrackTitleImage>
                <StyledTrackTitleText>
                  <StyledTrackTitleLink href="http://">
                    Morena <StyledTrackTitleSpan></StyledTrackTitleSpan>
                  </StyledTrackTitleLink>
                </StyledTrackTitleText>
              </StyledTrackTitle>
              <StyledTrackAuthor>
                <StyledTrackAuthorLink href="http://">
                  Tom Boxer
                </StyledTrackAuthorLink>
              </StyledTrackAuthor>
              <StyledTrackAlbum>
                <StyledTrackAlbumLink href="http://">
                  Soundz Made in Romania
                </StyledTrackAlbumLink>
              </StyledTrackAlbum>
              <StyledTrackTime>
                <StyledTrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </StyledTrackTimeSvg>
                <StyledTrackTimeText>3:36</StyledTrackTimeText>
              </StyledTrackTime>
            </StyledPlaylistTrack>
          </StyledPlaylistItem>

          <StyledPlaylistItem>
            <StyledPlaylistTrack>
              <StyledTrackTitle>
                <StyledTrackTitleImage>
                  <StyledTrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </StyledTrackTitleSvg>
                </StyledTrackTitleImage>
                <StyledTrackTitleText>
                  <StyledTrackTitleLink href="http://">
                    <StyledTrackTitleSpan></StyledTrackTitleSpan>
                  </StyledTrackTitleLink>
                </StyledTrackTitleText>
              </StyledTrackTitle>
              <StyledTrackAuthor>
                <StyledTrackAuthorLink href="http://"></StyledTrackAuthorLink>
              </StyledTrackAuthor>
              <StyledTrackAlbum>
                <StyledTrackAlbumLink href="http://"></StyledTrackAlbumLink>
              </StyledTrackAlbum>
              <StyledTrackTime>
                <StyledTrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </StyledTrackTimeSvg>
                <StyledTrackTimeText></StyledTrackTimeText>
              </StyledTrackTime>
            </StyledPlaylistTrack>
          </StyledPlaylistItem>
        </StyledContentPlaylist>
      </StyledCenterblockContent>
    </StyledMainCenterblock>
  );
}

export default Player;
