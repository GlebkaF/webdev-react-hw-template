import React from "react";
import "./filter_Item.css";
import { styled } from "styled-components";

const StyledGenre = styled.div`
position: absolute;
border-radius: 12px;
background: #313131;
display: inline-flex;
padding: 34px;
flex-direction: column;
align-items: flex-start;
gap: 10px;
`

export const GenreList = () => {
    return (
        <StyledGenre>
            <div>Поп</div>
            <div>Рок</div>
            <div>Инди</div>
            <div>Джаз</div>
        </StyledGenre>
    )
}