import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import { loadUserList } from "../api/API_clients";

const initialState = {
    logged: false,
    pending: null,
    userList: [],
};

const actionType = {
    SET_LOGGED: 'SET_LOGGED',
    LOAD_USER_LIST_SUCCESS: 'LOAD_USER_LIST_SUCCESS',
    LOAD_USER_LIST_PENDING: 'LOAD_USER_LIST_PENDING',
    LOAD_USER_LIST_ERROR: 'LOAD_USER_LIST_ERROR',
};

export const loggedCreator = value => ({
    type: actionType.SET_LOGGED,
    value,
});

export const loadUserListPendingCreator = () => ({
    type: actionType.LOAD_USER_LIST_PENDING,
});

export const loadUserListSuccessCreator = (value) => ({
    type: actionType.LOAD_USER_LIST_SUCCESS,
    value,
})

export const loadUserListErrorCreator = () => ({
    type: actionType.LOAD_USER_LIST_ERROR,
});


export const loadUsers = () => {
    return dispatch => {
        dispatch(loadUserListPendingCreator())
        Promise.all([loadUserList()])
            .then(data => {
                dispatch(loadUserListSuccessCreator(data[0].results))
            })
            .catch(error => {
                alert('Something went wrong, try again')
                dispatch(loadUserListErrorCreator())
            })
    }
}

const reducerUsers = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_LOGGED':
            return {
                ...state,
                logged: action.value,
            }
        
        case 'LOAD_USER_LIST_PENDING':
            return {
                ...state,
                pending: true,
            }

        case 'LOAD_USER_LIST_SUCCESS':
            return {
                ...state,
                pending: false,
                userList: action.value,
            }

        case 'LOAD_USER_LIST_ERROR':
            return {
                ...state,
                pending: false,
                error: true,
            }
        
        default:
            return state
    }
}

export const mainRecuer = combineReducers({reducerUsers});

export const store = createStore(
    mainRecuer,
    applyMiddleware(thunk),
)