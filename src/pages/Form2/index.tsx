import { useContext } from 'react'
import { OrderContext } from '../../context/MainContext'
import * as C from './styled'

export function Form2(){
    const {name} = useContext(OrderContext)

    const isName = name.map((item) => item)

    return(

        <C.Container>
            <C.TitleAndSubtitle>
                <p> <strong>{isName}</strong>, prazer em conhece-lo(a)</p>

                <h1>Preencha os campos abaixo</h1>

                
            </C.TitleAndSubtitle>
           

            <C.FormContainer >
                <div>
                    <label>Faixa Salarial</label>
                    <input  
                        placeholder='ex: 3.000'
                        required
                        
                    />
                </div>
                
                <div>
                    <label>Senhoridade</label>
                    <input  
                        placeholder='ex: Senior II'
                        required
                        
                    />
                </div>
                
                <button type='submit'  >Proxima</button>
            </C.FormContainer>
        </C.Container>
    )
}