import { createContext, useReducer } from "react";
import { ActionInterface, ContextInterface } from "../interfaces/interfaces";


const initialState: ContextInterface = {
    episodes: [],
    favourites: []
}
export const Store = createContext<ContextInterface | any>(initialState);


function reducer(state: ContextInterface, action: ActionInterface): ContextInterface {
    //mutates the state
    switch (action.type) {
        case 'FETCH_DATA':
            return { ...state, episodes: action.payload }

        case "ADD_FAV":
            return { ...state, favourites: [...state.favourites, action.payload] }

        case "REMOVE_FAV":
            return { ...state, favourites: action.payload }
        default:
            return state;
    }
}

export function StoreProvider(props: any) {
    //grants all components in our app access to the store

    const [state, dispatch] = useReducer(reducer, initialState)

    return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>
}

