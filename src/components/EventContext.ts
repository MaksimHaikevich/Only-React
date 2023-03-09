import {createContext} from 'react';

type UserContextType = {
    context: number | string
    setContext: any
}

const iUserContextState = {
    context: 1,
    setContext: () => {
    },
}

export default createContext<any>(iUserContextState);