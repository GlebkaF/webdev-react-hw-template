import React from "react";
import "./filter_Item.css";
import { styled } from "styled-components";

const StyledAuthor = styled.div`
position: absolute;
border-radius: 12px;
background: #313131;
display: inline-flex;
padding: 34px;
flex-direction: column;
align-items: flex-start;
gap: 10px;
`

export const AuthorList = () => {
    return (
        <StyledAuthor>
            <div>Dynoro, Outwork, Mr. Gee</div>
            <div>Стоункат, Psychopath</div>
            <div>HYBIT, Mr. Black, Offer Nissim, Hi Profile</div>
            <div>Blue Foundation, Zeds Dead</div>
        </StyledAuthor>
    )
}
