import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { FInalForm } from "../pages/FinalForm";
import { Form1 } from "../pages/Form1";
import { Form2 } from "../pages/Form2";
import { Home } from "../pages/Home";



export function Router (){


    return(

        <Routes>
            <Route path="/" element ={<DefaultLayout/>}>
                <Route  path="/" element ={<Home/>} />
                <Route  path="/" element ={<Form1/>} />
                <Route  path="/form2" element ={<Form2/>} />
                <Route path="/finalForm" element={<FInalForm/>} />
            </Route>

        </Routes>
    )
}