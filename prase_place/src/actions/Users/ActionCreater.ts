import { UsersActionTypes } from './ActionType'
import { createAction } from 'typesafe-actions'
import { UserData, AboutClapActionUser } from '../../state/UserData'

export const addUserAction = createAction(
    UsersActionTypes.ADD_USER,
    (user: UserData) => user,
)();

export const setMainUserAction = createAction(
    UsersActionTypes.SET_MAIN_USER,
    (user: UserData) => user,
)();

export const setPrasedUserAction = createAction(
    UsersActionTypes.SET_PRASED_USER,
    (user: UserData) => user,
)();

export const clapAction = createAction(
    UsersActionTypes.CLAP_ACTION,
    (aboutClapActionUser: AboutClapActionUser) => aboutClapActionUser,
)();