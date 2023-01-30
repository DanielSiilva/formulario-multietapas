import { ChangeEvent, useContext, useState } from 'react'
import { OrderContext } from '../../context/MainContext'
import * as C from './styled'

export function Form2(){
    const {name, wage,setWage, level,setLevel} = useContext(OrderContext)
    const isName = name.map((item) => item)


    const [newWage, setNewWage] = useState('')
    const [newLevel, setNewLevel] = useState('')

    function handleCreateNewWage(event: ChangeEvent<HTMLFormElement>){
        event.preventDefault()

        setWage([...wage, newWage])
        setLevel([...level, newLevel])

        setNewWage('')
        setNewLevel('')
    }

    function handleCreateNewWageChange(event: ChangeEvent<HTMLInputElement>){
            event.target.setCustomValidity('')

            setNewWage(event.target.value)
    }

    function handleNewWageInvalid(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('Esse campo é obrigatório!')

    }

    function handleNewLevelChange (event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('')

        setNewLevel(event.target.value)
    }

    function handleNewLevelInvalid(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('Esse campo é obrigatório!')

    }
    
    const checkInput = newWage.length === 0 && newLevel.length === 0

    return(

        <C.Container>
            <C.TitleAndSubtitle>
                <p> <strong>{isName}</strong>, prazer em conhece-lo(a)</p>

                <h1>Preencha os campos abaixo</h1>

                
            </C.TitleAndSubtitle>
           

            <C.FormContainer onSubmit={handleCreateNewWage}>
                <div>
                    <label>Faixa Salarial</label>
                    <input  
                        placeholder='ex: 3.000'
                        required
                        value={newWage}
                        onChange={handleCreateNewWageChange}
                        onInvalid={handleNewWageInvalid}
                    />
                </div>
                
                <div>
                    <label>Senhoridade</label>
                    <input  
                        placeholder='ex: Senior II'
                        required
                        value={newLevel}
                        onChange={handleNewLevelChange}
                        onInvalid={handleNewLevelInvalid}
                        
                    />
                </div>
                
                <button type='submit'  disabled={checkInput}>Proxima</button>
            </C.FormContainer>
        </C.Container>
    )
}