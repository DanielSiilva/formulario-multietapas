import {
    createContext,
    FormEvent,
    ReactNode,
    useState,
} from 'react'


  

  
  interface OrderContextType {
    name: string[]
    setName: (name:string[]) => void

  }
  
  export const OrderContext = createContext({} as OrderContextType)
  
  interface OrderContextProviderProps {
    children: ReactNode
  }
  
  export function OrderContextProvider({ children }: OrderContextProviderProps) {
    const [name, setName] = useState([''])

   

   
   
    return (
      <OrderContext.Provider
        value={{
          name,
          setName
        }}
      >
        {children}
      </OrderContext.Provider>
    )
  }
  