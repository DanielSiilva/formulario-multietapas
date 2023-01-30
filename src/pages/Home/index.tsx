
import {Wrapper} from "./styled"
import { useContext } from "react"
import { OrderContext } from "../../context/MainContext"



export function Home (){
    const {users} = useContext(OrderContext)

    const user = users.map((item) => item.user)
    return(
        <Wrapper>
           <h1>{user}</h1>
        </Wrapper>
    )
}