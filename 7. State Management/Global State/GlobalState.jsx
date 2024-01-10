// Contoh: Mengelola Global State dengan Context
// File: GlobalState.js
import React, { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();

export const useGlobalState = () => {
    return useContext(GlobalStateContext);
};

export const GlobalStateProvider = ({ children }) => {
    const [globalState, setGlobalState] = useState(initialState);

    const updateGlobalState = (newState) => {
        setGlobalState({ ...globalState, ...newState });
    };

    return (
        <GlobalStateContext.Provider value={{ globalState, updateGlobalState }}>
            {children}
        </GlobalStateContext.Provider>
    );
};
