import React from "react";
import { useState } from 'react';
import { GenreList } from "./GenreList";
import { AuthorList } from "./AuthorList";
import { YearList } from "./YearList";


function Filter () {
    const [filter, setFilter] = useState("")
    const GENRE = "genre"
    const AUTHOR = "author"
    const YEAR = "year"

    const onFilterClick = (newFilter) => {
        setFilter(filter === newFilter ? "" : newFilter)
    }

    const isVisibleAuthor = filter === AUTHOR
    const isVisibleGenre = filter === GENRE
    const isVisibleYear = filter === YEAR
    return (
            <div className="filter__title">Искать по:
            <div className="filter__content">
                <div className={isVisibleAuthor ? "filter__button button-author _btn-text --active" : "filter__button button-author _btn-text"}
                    
                    onClick={() => onFilterClick (AUTHOR)}>
                    исполнителю
                </div>
                {isVisibleAuthor && <AuthorList />}
            </div>
            <div className="filter__content">
                <div className={isVisibleYear ? "filter__button button-year _btn-text --active" : "filter__button button-year _btn-text"}
                    onClick={() => onFilterClick(YEAR)}>
                    году выпуска
                </div>
                {isVisibleYear && <YearList />}
            </div>
            <div className="filter__content">
                <div className={isVisibleGenre ? "filter__button button-genre _btn-text --active" : "filter__button button-genre _btn-text"}
                    onClick={() => onFilterClick(GENRE)}>
                    жанру
                </div>
                {isVisibleGenre && <GenreList />}
            </div>
            </div>
    )
}
export default Filter;


