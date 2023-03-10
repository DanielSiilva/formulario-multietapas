
import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { OrderContext } from '../../context/MainContext'
import * as C from './styled'

export function Form1(){
    const {name,setName, stack, setStack} = useContext(OrderContext)
    
    const [newName, setNewName] = useState('')
    const [newStack, setNewStack] = useState('')

    const navigate = useNavigate()
    
    function handleCreateNewNameIsStack (event: FormEvent){
        event.preventDefault()

        setName([...name, newName])
        setStack([...stack, newStack])
        setNewName('')
        setNewStack('')

        navigate('/form2')
    }

    function handleNewNameChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('')
        setNewName(event.target.value);
    }

    function handleNewNameInvalid(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    function handleNewStackInvalid(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }


    function handleNewStackChange(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('')
        setNewStack(event.target.value)
    }

    const checkInput = newName.length === 0 && newStack.length === 0

    return(

        <C.Container>
            <C.TitleAndSubtitle>
                <p>Bem-vindo(a)</p>

                <h1>Preencha os campos abaixo</h1>

                
            </C.TitleAndSubtitle>
           

            <C.FormContainer onSubmit={handleCreateNewNameIsStack}>
                <div>
                    <label>Nome completo</label>
                    <input  
                        placeholder='Seu nome'
                        required
                        value={newName}
                        onChange={handleNewNameChange}
                        onInvalid={handleNewNameInvalid}
                    />
                </div>
                
                <div>
                    <label>Stack</label>
                    <input  
                        placeholder='ex: ReactJs'
                        required
                        value={newStack}
                        onChange={ handleNewStackChange}
                        onInvalid={handleNewStackInvalid}

                    />
                </div>
                
                <button type='submit'  disabled={checkInput}>Proxima</button>
            </C.FormContainer>
        </C.Container>
    )
}