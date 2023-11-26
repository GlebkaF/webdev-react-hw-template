import React from "react";
import { useState } from 'react';
import { GenreList } from "./GenreList";
import { AuthorList } from "./AuthorList";
import { YearList } from "./YearList";


export const Filter = () => {
    const [activeAuthor, setActiveAuthor] = useState(false)
    const [activeYear, setActiveYear] = useState(false)
    const [activeGenre, setActiveGenre] = useState(false)
    const [visibleAuthor, setVisibleAuthor] = useState(false)
    const [visibleYear, setVisibleYear] = useState(false)
    const [visibleGenre, setVisibleGenre] = useState(false)

    const clickOnAuthorFilter = () => {
        setActiveAuthor(!activeAuthor)
        setActiveYear(false)
        setActiveGenre(false)
        setVisibleAuthor(!visibleAuthor)
        setVisibleYear(false)
        setVisibleGenre(false)
    }

    const clickOnYearFilter = () => {
        setActiveYear(!activeYear)
        setActiveAuthor(false)
        setActiveGenre(false)
        setVisibleYear(!visibleYear)
        setVisibleAuthor(false)
        setActiveGenre(false)
    }

    const clickOnGenreFilter = () => {
        setActiveGenre(!activeGenre)
        setActiveAuthor(false)
        setActiveYear(false)
        setVisibleGenre(!visibleGenre)
        setVisibleAuthor(false)
        setVisibleYear(false)
    }
    return (
        <Filter>
            <div className="filter__title">Искать по:</div>
            <centerblock__content className="filter__content">
                <filter__button
                    $isActive={activeAuthor}
                    onClick={clickOnAuthorFilter}
                >
                    исполнителю
                </filter__button>
                {visibleAuthor && <AuthorList />}
            </centerblock__content>
            <centerblock__content className="filter__content">
                <filter__button
                    $isActive={activeYear}
                    onClick={clickOnYearFilter}
                >
                    году выпуска
                </filter__button>
                {visibleYear && <YearList />}
            </centerblock__content>
            <centerblock__content className="filter__content">
                <filter__button
                    $isActive={activeGenre}
                    onClick={clickOnGenreFilter}
                >
                    жанру
                </filter__button>
                {visibleGenre && <GenreList />}
            </centerblock__content>

        </Filter>
    )
}
