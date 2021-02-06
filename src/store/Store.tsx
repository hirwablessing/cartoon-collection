import { createContext, useReducer } from "react";

interface ContextInterface {
    episodes: [],
    favourites: []
}

const initialState: ContextInterface = {
    episodes: [],
    favourites: []
}

interface ActionInterfaces {
    type: string,
    payload: any
}

export const Store = createContext<ContextInterface | any>(initialState);


function reducer(state: ContextInterface, action: ActionInterfaces): ContextInterface {
    //mutates the state
    switch (action.type) {
        case 'FETCH_DATA':
            return { ...state, episodes: action.payload }
        default:
            return state;
    }
}

export function StoreProvider(props: any) {
    //grants all components in our app access to the store

    const [state, dispatch] = useReducer(reducer, initialState)

    return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>
}

