import {
    createContext,
    ReactNode,
    useState,
} from 'react'

  interface userProps{
      user: string
  }
  

  
  interface OrderContextType {
    users: userProps[]
  }
  
  export const OrderContext = createContext({} as OrderContextType)
  
  interface OrderContextProviderProps {
    children: ReactNode
  }
  
  export function OrderContextProvider({ children }: OrderContextProviderProps) {
    const [users, setUsers] = useState<userProps[]>([{user:'Template De estudos Para Projetos Pessoais'}])
  
    
    return (
      <OrderContext.Provider
        value={{
          users
        }}
      >
        {children}
      </OrderContext.Provider>
    )
  }
  