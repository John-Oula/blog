//setup data layer
//track state

//imports
import React, {createContext, useContext, useReducer} from 'react'


// Data layer
export const StateContext = createContext();

// Build provider
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

// Wrap app in state provider
export const useStateValue = ()=> useContext(StateContext)