import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    gap: 1rem;

    width: 50vw;
    height: 80vh;
    

    padding: 1rem;

`


export const TitleAndSubtitle = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;

    

     gap: 0.5rem;

     h1{
        font-size: 1.5rem;
        font-weight: bold;
     }

     strong{
        font-size: 1.2rem;
        font-weight: bold;

        color: ${props => props.theme['green-light']};
     }

`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    
    gap: 0.5rem;

    margin-top: 3rem;

    
    button{
            width: 20rem;
            height: 2rem;
            padding: 0.5rem;

            color: ${props => props.theme['white']} ;
            background: ${props => props.theme['green-light']};

            border: none;
            border-radius: 4px;

            cursor: pointer;

            :disabled{
                opacity: 0.7;
                cursor: not-allowed;
            }
    }




    div{
        display: flex;
        flex-direction: column;
        gap: 0.3rem;

        label{
            font-size: 1rem;
            font-weight: bold;

            color: ${props => props.theme['gray']};
        }

        input{
            width: 20rem;
            height: 2rem;
            padding: 0.5rem;
        }

    }


`