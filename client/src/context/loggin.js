import { createContext, useState } from 'react'

// Este es el que tenemos que consumir
export const LogginContext = createContext()

// Este es el que nos provee de acceso al contexto
export function LogginProvider ({ children }) {
  const [loggin, setLoggin] = useState(false)

  return (
    <LogginContext.Provider value={{
      loggin,
      setLoggin
    }}
    >
      {children}
    </LogginContext.Provider>
  )
}