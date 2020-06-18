import { UserData, UserState } from '../state/UserData'
import { UserAction } from '../actions/Users/Action'
import { UsersActionTypes } from '../actions/Users/ActionType'

const initialState: UserState = {
    users: [],
    mainUser: {
        userid: 0,
        name: '',
        clapped: 0,
        enableClap: 0,
        imageurl: ''
    },
    prasedUser: {
        userid: 0,
        name: '',
        clapped: 0,
        enableClap: 0,
        imageurl: ''
    }
}

export default (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UsersActionTypes.ADD_USER:
            return {
                users: [...state.users, action.payload],
                mainUser: state.mainUser,
                prasedUser: state.prasedUser
            }
        case UsersActionTypes.SET_MAIN_USER:
            return {
                users: [...state.users],
                mainUser: action.payload,
                prasedUser: state.prasedUser
            }
        case UsersActionTypes.SET_PRASED_USER:
            return {
                users: [...state.users],
                mainUser: state.mainUser,
                prasedUser: action.payload
            }
        case UsersActionTypes.CLAP_ACTION:
            var result: UserState = state
            result.users.forEach((user: UserData) => {
                if (user.userid === action.payload.clappUserID) {
                    user.enableClap -= 2
                } else if (user.userid === action.payload.doPraseActionUserID) {
                    user.clapped += 1
                } else if (user.userid === action.payload.prasedUserID) {
                    user.clapped += 1
                }
            })
            return result
        default:
            return state
    }
}