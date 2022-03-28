import {css} from "@emotion/react";

export const MyPokemonPageStyle = css`
height:100%;
flex-grow:1;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.modal-content {
    background-color: #e3e5dd;
    margin: auto;
    padding: 20px 20px 60px;
    border: 2px solid black;
    width: 80%;
    max-width: 600px;
    max-height: 500px;
    border-radius: 15px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display:flex;
    flex-direction:column;
    align-items:center;

    p {
        text-align: center;
        font-size: 25px;
    }

    .confirmation {
        display:flex;
        flex-direction: row;
        width:75%;
        justify-content: space-between;

        .confirm {
            border: 2px solid black;
            padding: 5px 10px;
            background-color:red;
            cursor:pointer;
            border-radius: 12px;
        }

        .cancel {
            border: 2px solid black;
            padding: 5px 10px;
            background-color: #4dad5b;
            cursor:pointer;
            border-radius: 12px;
        }
    }
}
`