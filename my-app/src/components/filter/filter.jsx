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
const FilterButton = styled.button`
width: 144px;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
border: 1px solid #ffffff;
border-radius: 60px;
padding: 6px 20px;
& :not(:last-child) {
margin-right: 10px;
& --active, .--active:hover{
    color: #b672ff;
    border-color: #b672ff;
& ::active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
background-color: ${props => props.isVisibleAuthor ? "filter__button button-author _btn-text --active" : "filter__button button-author _btn-text" }
`
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
                <FilterButton 
                    
                    onClick={() => onFilterClick (AUTHOR)}>
                    исполнителю
                </FilterButton>
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


