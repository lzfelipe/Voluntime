import styled from 'styled-components'

export const DefaultBtn = styled.button`
        color: white;
        background-color: #FF4F00;
        font-size: 1.2em;
        margin: 1em;
        padding: 0.3em 2em;
        border: 1px solid transparent;
        border-radius: 20px;
        font-family: 'ElaineSansMedium';

        :hover {
           background-color: #FF7F00;
           cursor: pointer;
        }

`

export const DefaultBtnNoHover = styled.button`
        color: white;
        background-color: #FF4F00;
        font-size: 1.2em;
        margin: 1em;
        padding: 0.3em 2em;
        border: 1px solid transparent;
        border-radius: 20px;
        font-family: 'ElaineSansMedium';

        :hover {
           cursor: pointer;
        }
`

export const DefaultInput = styled.input`
        color: grey;
        background-color: none;
        border: none;
        border-bottom: 1px solid grey;
        font-family: 'ElaineSansRegular';
        font-size: 20px;
        margin-bottom: 25px;
        width: 68vw;
        background-color: transparent;

        ::placeholder {
                color: grey;
                text-align: left;
        }

        :focus{
                outline: none;
        }
        

`

export const DefaultTextArea = styled.textarea`
        color: grey;
        background-color: none;
        border: none;
        border-bottom: 1px solid grey;
        font-family: 'ElaineSansRegular';
        font-size: 15px;
        margin-bottom: 25px;
        width: 68vw;
        background-color: transparent;

        ::placeholder {
                color: grey;
                text-align: left;
                font-size: 18px;
        }
`

export const DefaultContainer = styled.div`
        display: flex;
        height: ${props => props.heightDiv || "100vh"};
        width: ${props => props.widthDiv || "100%"};
        align-content: center;
        align-items: center;
        justify-items: center;
        justify-content: center;
        flex-wrap: wrap;
        background-color: ${props => props.bgColor || "#FFF"};

        ::-webkit-scrollbar {display:none;}

        .caption {
                display: flex;
                justify-content: center;
                justify-items: center;
                text-align: center;
                background-color: rgb(0, 41, 83, 0.8);
                width: 87px;
                margin-left: 1.8%;
                color: white;
                font-family: "ElaineSansRegular";
                height: 100px;
                align-content: center;
                align-items: center;
                opacity: ${props => props.opacity || 1};
                flex-wrap: wrap
        }
`

export const DefaultTitle = styled.h1`
        text-justify: left;
        text-align: left;
        color: #ff4f00;
        font-family: 'ElaineSansExtraBold';
        font-size: 6vh;
        font-weight: 900;
        width: 70%;
`

export const DefaultText = styled.p`
        text-align: center;
        color: #00c5dc;
        font-family: 'ElaineSansBold';
        font-size: 3vh;
        width: 70%;
`

export const FilterRadios = styled.div`

label { 
    height: fit-content;
    width: fit-content;
    margin:4px;
    background-color: #FFF;
    border-radius: 20px;
    border:1px solid #ff4f00;
    color: #ff4f00;
    overflow:auto;
}

label > span {
    text-align:center;
    font-size: 15px;
    padding: 3px 10px;
    display:block;
    font-family: 'ElaineSansRegular';
}

label input {
    position:absolute;
    top:-20px;
}

input:checked + span {
    background-color: #ff4f00;
    color: #F7F7F7;
}

`
export const DefaultSubTitle = styled.h2 `
        width: 100%;
        color: #002953;
        font-family: 'ElaineSansRegular';
        text-align: center;
        height: 10%;
        font-size: 20px;
`

export const DefaultLabelForUploadBtn = styled.label `
        background-color: #FF4F00;
        height: 50px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        color: white;
        font-family: "ElaineSansRegular";
        
        input {
          padding: 20
        }
`

export const LandingPageText = styled.h2`
        color: #002953;
        font-family: "ElaineSansRegular";
        text-align: justify;
        font-size: 1.4rem;
        width: 90%
`