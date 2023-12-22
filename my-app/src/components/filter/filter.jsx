import React from "react";
import { useState } from 'react';
import { GenreList } from "./GenreList";
import { AuthorList } from "./AuthorList";
import { YearList } from "./YearList";
import "./filter_Item.css"
import { styled } from "styled-components";

const StyledFilterTitle = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
padding: 20px 40px 20px 111px;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
gap: 15px;
background-color: black;
`

const StyledFilterContent = styled.div`
padding: 20px 40px 20px 111px;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
gap: 15px;
background-color: black;
`
//const StyledFilterTitle = styled.div``
//const StyledFilterTitle = styled.div``
//const StyledFilterTitle = styled.div``

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
            <StyledFilterTitle>Искать по:
            <StyledFilterContent>
                <div className={isVisibleAuthor ? "filter__button button-author _btn-text --active" : "filter__button button-author _btn-text"}
                    
                    onClick={() => onFilterClick (AUTHOR)}>
                    исполнителю
                </div>
                {isVisibleAuthor && <AuthorList />}
            </StyledFilterContent>
            <StyledFilterContent>
                <div className={isVisibleYear ? "filter__button button-year _btn-text --active" : "filter__button button-year _btn-text"}
                    onClick={() => onFilterClick(YEAR)}>
                    году выпуска
                </div>
                {isVisibleYear && <YearList />}
            </StyledFilterContent>
            <StyledFilterContent>
                <div className={isVisibleGenre ? "filter__button button-genre _btn-text --active" : "filter__button button-genre _btn-text"}
                    onClick={() => onFilterClick(GENRE)}>
                    жанру
                </div>
                {isVisibleGenre && <GenreList />}
            </StyledFilterContent>
            </StyledFilterTitle>
    )
}
export default Filter;


