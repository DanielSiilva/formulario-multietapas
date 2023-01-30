import { ChangeEvent, useContext, useState } from 'react'
import { OrderContext } from '../../context/MainContext'
import * as C from './styled'

export function Form2(){
    const {name, wage,setWage} = useContext(OrderContext)
    const isName = name.map((item) => item)


    const [newWage, setNewWage] = useState('')

    function handleCreateNewWage(event: ChangeEvent<HTMLFormElement>){

        setWage([...wage, newWage])
        setNewWage('')
    }

    function handleCreateNewWageChange(event: ChangeEvent<HTMLInputElement>){
            event.preventDefault()

            setNewWage(event.target.value)
    }
    

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
                        value={newWage}
                        onChange={handleCreateNewWageChange}
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