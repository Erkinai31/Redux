const defaultState = {
    empl: [
        {id: 1, name: 'ALex'},
        {id: 2, name: 'Steven'},
        {id: 3, name: 'Neena'}
    ]
}

const ADD_EMPL = 'ADD_EMPL'
const REM_EMPL = 'REM_EMPL'
const REMOVE_EMPL = 'REMOVE_EMPL'
const ADD_MANY_EMPL = 'ADD_MANY_EMPL'


export const emplReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_EMPL:
            return {...state,empl:[...state.empl,...action.payload]}
        case ADD_EMPL:
            return {...state, empl: [...state.empl, {id: Date.now(), name: action.payload}]}
        case REM_EMPL:
            return {...state, empl: state.empl.slice(0,state.empl.length-1)} //удаляется последний элемент
        case REMOVE_EMPL:
            return {...state,empl:state.empl.filter(empl => empl.id !== action.payload)}
        default:
            return state
    } 
}

export const addEmplAction = (payload) => ({type: ADD_EMPL, payload})
export const remEmplAction = () => ({type: REM_EMPL}) 
export const removeEmplAction = (empl) => ({type:REMOVE_EMPL, payload:empl.id})
export const addManyEmplAction = (payload) => ({type: ADD_MANY_EMPL, payload})
