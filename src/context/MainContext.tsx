import {
    createContext,
    ReactNode,
    useState,
} from 'react'


  

  
  interface OrderContextType {
    name: string[],
    setName: (name:string[]) => void,

    stack: string[],
    setStack: (name:string[]) => void,

    wage: string[],
    setWage: (name:string[]) => void,

    level: string[],
    setLevel:(name:string[]) => void,

  }
  
  export const OrderContext = createContext({} as OrderContextType)
  
  interface OrderContextProviderProps {
    children: ReactNode
  }
  
  export function OrderContextProvider({ children }: OrderContextProviderProps) {
    const [name, setName] = useState([''])
    const [stack, setStack] = useState([''])

    const [wage, setWage] = useState([''])
    const [level, setLevel] = useState([''])
   
    console.log(wage)
    console.log(level)

   
    return (
      <OrderContext.Provider
        value={{
          name,
          setName,
          setStack,
          stack,
          setWage,
          wage,
          setLevel,
          level
        }}
      >
        {children}
      </OrderContext.Provider>
    )
  }
  