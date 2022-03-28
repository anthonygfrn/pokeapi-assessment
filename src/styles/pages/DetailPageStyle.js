import {css} from "@emotion/react";

export const DetailPageStyle = css`
    height:100%;
    flex-grow:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    .modal {
        display: none; 
        position: fixed; 
        z-index: 1; 
        left: 0;
        top: 0;
        width: 100%; 
        height: 100%; 
        overflow: auto; 
        background-color: #red; /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }

    .modal-content {
        background-color: #e3e5dd;
        margin: auto;
        padding: 10px 10px 30px;
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
        }

        .unique-name {
            display:flex;
            width:70%;
            flex-direction:column;
            align-items:center;
            form {
                display:flex;
                flex-direction:column;
                align-items:center;
                input {
                    margin:3px 0;
                }
            }
            div {
                margin:5px 0;
            }

            #input-name {
                border-radius: 25px;
                border: 2px solid;
                height: 30px;
                padding:5px;
                text-align:center;
            }

            #input-submit {
                background: red;
                border: 2px solid;
                border-radius: 25px;
                height: 30px;
                width:75%;
                cursor: pointer;
            }
        }

        .throw-ball {
            border: 2px solid black;
            border-radius: 12px;
            margin: 15px;
            padding: 10px;
            background-color:red;
            cursor:pointer;
        }

        .error {
            color: red;
        }
    }

    .close {
        color: red;
        align-self:flex-end;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
    }

    
`