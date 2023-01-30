
import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { OrderContext } from '../../context/MainContext'
import * as C from './styled'

export function Form1(){
    const {name,setName} = useContext(OrderContext)
    const [newName, setNewName] = useState('')
    
    const viuName = name.map((item) => item)

    function addName (event: FormEvent){
        event.preventDefault()

        setName([...name, newName])
        setNewName('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewName(event.target.value);
     }



    return(

        <C.Container>
            <C.TitleAndSubtitle>
                <p>Bem-vindo(a)</p>

                <h1>Preencha os campos abaixo</h1>

                <p>{viuName}</p>
            </C.TitleAndSubtitle>
           

            <C.FormContainer onClick={addName}>
                <div>
                    <label>Nome</label>
                    <input  
                        placeholder='Seu nome'
                        required
                        value={newName}
                        onChange={handleNewCommentChange}
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