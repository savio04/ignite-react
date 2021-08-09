import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    /* Variavei no css */
    :root{
        --backgorund: #E5E5E5;
        --red: #E52e54;
        --blue: #5429CC;
        --green: #33CC95;

        --blue-light: #6933FF;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --shape: #FFFFFF
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        //font-size: 16px (padrão desktop)
        @media(max-width: 1080px){
            font-size: 93.75%;  //15px
        }

        @media(max-width: 720px){
            font-size: 87.5%; //14px
        }
    }

    body{
        background-color: var(--backgorund);
        -webkit-font-smoothing: antialiased; //fonte mais nitidas
    }

    body,input,textarea,button{
        font-family: 'Poppins',sans-serif;
        font-weight: 400;
    }
    h1,h2,h3,h4,h5,h6,strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    //Tudo o que estiver desabilitado tipo: inputs,butons
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

