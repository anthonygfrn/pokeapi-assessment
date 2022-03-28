import {css} from "@emotion/react";

export const CardStyle = css`
    width: 70%;
    max-width: 500px;
    background-color: #ffffff;
    padding: 5px;
    margin: 20px;
    border-radius: 15px;

    .name {
        font-size:large;
        padding: 10px;
        margin: 5px;
        text-transform: uppercase;
    }

    .picture {
        background-size: contain;
        justify-content: center;
        align-items: center;
        display: flex;
        margin: 5px;
        height: 30vh;
        img {
            height:100%;
        }
    }

    .type {
        border: 2px solid black;
        border-radius: 12px;
        margin: 5px;
        padding: 5px;
        cursor:pointer;
    }

    .dropdown {
        border: 2px solid black;
        border-radius: 12px;
        margin:0 10px 5px;
        padding: 5px;
        background-color: #4dad5b;
        display: flex;
        flex-wrap: wrap;

        .data {
            font-size: 14px;
            font-weight: 500;
            margin: 2px;
            padding: 2px;
            border-radius: 12px;
        }
        .data::first-letter {
            text-transform: uppercase;
        }
    }

    .throw-ball {
        border: 2px solid black;
        border-radius: 12px;
        margin: 15px;
        padding: 10px;
        background-color:red;
        cursor:pointer;
        text-align: center;
    }
    
`