import { createContext, useState } from "react";
import Menu from '..Apis/'
const AppContext = createContext()

const AppProvider = ({children})=>{
    const [data,setData] = useState(Menu)

    return <AppContext.Provider value={data}>{children}</AppContext.Provider>
}

export {AppContext, AppProvider}