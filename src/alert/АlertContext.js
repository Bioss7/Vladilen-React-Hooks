import React, {useContext, useReducer} from "react";

// useReducer позволяет работать со state, только через Reducer
// с помощью сторонних функций изменяем состояние, и это состояние меняется в компоненте 
// useReducer принимает Reducer начальное состояние, а возвращает кортеж из state и функции dispatch 
// которая позволяет взаимодействовать через Reducer

const AlertContext = React.createContext();

export const useAlert = () => {
    return useContext(AlertContext)
}

const SHOW_ALERT = 'show';
const HIDE_ALERT = 'hide';

const reducer = (state, action) => {
    switch(action.type) {
        case SHOW_ALERT: return {...state, visible: true, text: action.text}
        case HIDE_ALERT: return {...state, visible: false}
        default: return state
    }
}

export const AlertProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        visible: false,
        text: '' 
    })

    const show = text => dispatch({type: SHOW_ALERT, text})
    const hide = () => dispatch({type: HIDE_ALERT})

    return (
        <AlertContext.Provider value={{
            visible: state.visible,
            text: state.text,
            show, hide
        }}>
                {children}
        </AlertContext.Provider>
    )    
}