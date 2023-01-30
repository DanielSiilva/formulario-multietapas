import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    gap: 3rem;

    margin-top: 4rem;

    width: 30vw;
    height: 80vh;
    
    border: 1px solid ${props => props.theme['gray']};
    border-radius: 8px;

    padding: 1rem;

    strong{
        font-weight: bold;
        color: ${props => props.theme['green-light']};
    }

    button{
        padding: 0.3rem;

        width: 10rem;
        height: 2rem;

        cursor: pointer;

        font-weight: bold;

        color: ${props => props.theme['white']};
        background:  ${props => props.theme['green-light']};

        border: 1px;
        border-radius: 4px;
    }

`


export const InformationList = styled.div`
    display: flex;
    align-items: center;

    font-weight: bold;

    ul{
        display: flex;
        flex-direction: column;

        li{
            display: flex;
            gap: 0.2rem;

            strong{
                color: ${props => props.theme['green-light']};
            }
        }
    }
`



