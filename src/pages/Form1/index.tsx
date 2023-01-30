import { useNavigate } from 'react-router-dom'
import * as C from './styled'

export function Form1(){


    return(

        <C.Container>
            <C.TitleAndSubtitle>
                <p>Bem-vindo(a)</p>

                <h1>Preencha os campos abaixo</h1>
            </C.TitleAndSubtitle>
           

            <C.FormContainer>
                <div>
                    <label>Nome</label>
                    <input  
                        placeholder='Seu nome'
                        required
                    
                    />
                </div>
                
                <div>
                    <label>Stack</label>
                    <input  
                        placeholder='ex: ReactJs'
                        required
                    />
                </div>
                
                <button type='submit'>Proxima</button>
            </C.FormContainer>
        </C.Container>
    )
}