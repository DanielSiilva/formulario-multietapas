
import {Wrapper} from "./styled"
import { useContext } from "react"
import { OrderContext } from "../../context/MainContext"
import { Form1 } from "../Form1"



export function Home (){
    
    return(
        <Wrapper>
           <Form1 />
        </Wrapper>
    )
}