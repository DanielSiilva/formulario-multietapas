import { useContext } from 'react'
import { OrderContext } from '../../context/MainContext'
import * as C from './styled'

export function FInalForm(){
    const {name, stack, level, wage,} = useContext(OrderContext)
   
    const isName = name.map((item) => item);
    const isLevel = level.map((item) => item);
    const isStack = stack.map((item) => item);
    const isWage = wage.map((item) => item);


    return(

        <C.Container>
            <div>
                <p> <strong>{isName}</strong>, Esses são seus dados</p>
            </div>

            <C.InformationList>
                <ul>
                    <li>Stack: <strong>{isStack}</strong></li>
                    <li>Senioridade: <strong>{isLevel}</strong></li>
                    <li>Pretenção Salarial: <strong>{isWage}</strong></li>
                </ul>
            </C.InformationList>
            
            <button> Finalizar</button>
        </C.Container>
    )
}