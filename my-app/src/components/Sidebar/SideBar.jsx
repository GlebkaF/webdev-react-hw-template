import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useEffect, useState } from "react";
import SkeletonSideBar from "../Skeleton/Skeleton";
import "./Style.css"

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
      <div className="main__sidebar sidebar">
        <div className="sidebar__personal">
          <SkeletonTheme
            baseColor="#bbb4b4"
            highlightColor="#444"
            className="skeleton"
          >
            <p className="sidebar__personal-name">
              <Skeleton width={100} />
            </p>
            <Skeleton className="sidebar__avatar" />
          </SkeletonTheme>
        </div>
        <div className="sidebar__block">
          <div className="sidebar__list">
            <div className="sidebar__item">
              <SkeletonSideBar />
            </div>
            <div className="sidebar__item">
              <SkeletonSideBar />
            </div>
            <div className="sidebar__item">
              <SkeletonSideBar />
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__icon">
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <img
                className="sidebar__img"
                src="/img/playlist01.png"
                alt="day's playlist"
              />
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <img
                className="sidebar__img"
                src="/img/playlist02.png"
                alt="day's playlist"
              />
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <img
                className="sidebar__img"
                src="/img/playlist03.png"
                alt="day's playlist"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
