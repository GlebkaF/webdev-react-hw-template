import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useEffect, useState } from "react";
import SkeletonSideBar from "../Skeleton/Skeleton";
import "./Style.css"
import {styled} from "styled-components"

const StyledMainSidebar = styled.div`
max-width: 418px;
padding: 20px 90px 20px 78px;
`

const StyledSidebarPersonal = styled.div`
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
-webkit-box-pack: end;
-ms-flex-pack: end;
justify-content: flex-end;
padding: 12px 0 15px 0;
`

const StyledSidebarPersonalName= styled.p`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #ffffff;
margin-right: 16px;
`

const StyledSidebarBlock = styled.div`
height: 100%;
padding: 240px 0 0 0;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;
`

const StyledSidebarList = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
`

const StyledSidebarItem = styled.div`
width: 250px;
height: 150px;
`

const StyledSidebarIcon = styled.div`
width: 43px;
height: 43px;
background-color: #313131;
border-radius: 50%;
cursor: pointer;
`

const StyledSidebarLink = styled.a`
width: 100%;
height: 100%;
`

const StyledSidebarImg = styled.img`
width: 100%;
height: auto;
`

function SideBar() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading)
    return (
      <StyledMainSidebar>
        <StyledSidebarPersonal>
          <SkeletonTheme
            baseColor="#bbb4b4"
            highlightColor="#444"
            className="skeleton"
          >
            <StyledSidebarPersonalName>
              <Skeleton width={100} />
            </StyledSidebarPersonalName>
            <Skeleton className="sidebar__avatar" />
          </SkeletonTheme>
        </StyledSidebarPersonal>
        <StyledSidebarBlock>
          <StyledSidebarList>
            <StyledSidebarItem>
              <SkeletonSideBar />
            </StyledSidebarItem>
            <StyledSidebarItem>
              <SkeletonSideBar />
            </StyledSidebarItem>
            <StyledSidebarItem>
              <SkeletonSideBar />
            </StyledSidebarItem>
          </StyledSidebarList>
        </StyledSidebarBlock>
      </StyledMainSidebar>
    );

  return (
    <StyledMainSidebar>
      <StyledSidebarPersonal>
        <StyledSidebarPersonalName>Sergey.Ivanov</StyledSidebarPersonalName>
        <StyledSidebarIcon>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </StyledSidebarIcon>
      </StyledSidebarPersonal>
      <StyledSidebarBlock>
        <StyledSidebarList>
          <StyledSidebarItem>
            <StyledSidebarLink href="#">
              <StyledSidebarImg
                src="/img/playlist01.png"
                alt="day's playlist"
              />
            </StyledSidebarLink>
          </StyledSidebarItem>
          <StyledSidebarItem>
            <StyledSidebarLink href="#">
              <StyledSidebarImg
                src="/img/playlist02.png"
                alt="day's playlist"
              />
            </StyledSidebarLink>
          </StyledSidebarItem>
          <StyledSidebarItem>
            <StyledSidebarLink href="#">
              <StyledSidebarImg
                src="/img/playlist03.png"
                alt="day's playlist"
              />
            </StyledSidebarLink>
          </StyledSidebarItem>
        </StyledSidebarList>
      </StyledSidebarBlock>
    </StyledMainSidebar>
  );
}
export default SideBar;
