import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useEffect, useState } from "react";
import SkeletonSideBar from "../Skeleton/Skeleton";
import * as S from "./SideBar.Styles"

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
      <S.MainSidebar>
        <S.SidebarPersonal>
          <SkeletonTheme
            baseColor="#bbb4b4"
            highlightColor="#444"
            className="skeleton"
          >
            <S.SidebarPersonalName>
              <Skeleton width={100} />
            </S.SidebarPersonalName>
            <Skeleton className="sidebar__avatar" />
          </SkeletonTheme>
        </S.SidebarPersonal>
        <S.SidebarBlock>
          <S.SidebarList>
            <S.SidebarItem>
              <SkeletonSideBar />
            </S.SidebarItem>
            <S.SidebarItem>
              <SkeletonSideBar />
            </S.SidebarItem>
            <S.SidebarItem>
              <SkeletonSideBar />
            </S.SidebarItem>
          </S.SidebarList>
        </S.SidebarBlock>
      </S.MainSidebar>
    );

  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarIcon>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          <S.SidebarItem>
            <S.SidebarLink href="#">
              <S.SidebarImg src="/img/playlist01.png" alt="day's playlist" />
            </S.SidebarLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarLink href="#">
              <S.SidebarImg src="/img/playlist02.png" alt="day's playlist" />
            </S.SidebarLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarLink href="#">
              <S.SidebarImg src="/img/playlist03.png" alt="day's playlist" />
            </S.SidebarLink>
          </S.SidebarItem>
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}
export default SideBar;
