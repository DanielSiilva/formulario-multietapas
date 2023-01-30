import {BrowserRouter} from 'react-router-dom'
import {ThemeProvider } from 'styled-components'
import { Router } from './Router/Routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import {OrderContextProvider} from './context/MainContext'

export function App (){


  return(
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <OrderContextProvider>
          <Router />
        </OrderContextProvider>
        <GlobalStyle/>
      </BrowserRouter>
    </ThemeProvider>
    
  )
}