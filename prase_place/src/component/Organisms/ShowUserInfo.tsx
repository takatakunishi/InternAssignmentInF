import React from 'react'
import { useSelector } from 'react-redux';
import '../../style/Organisms/ShowUserInfo.css'
import UserSelect from '../Molecules/UserSelect'
import RootState from '../../state';
import ClapData from '../Molecules/ClapData'
import AddUser from '../Molecules/AddUser'
import { Users } from '../../state/UserData'

type Props = {
    users: Users
}

const ShowUserInfo: React.FC<Props> = props => {
    const users = useSelector<RootState, RootState['user']>(state => state.user)
    const mainUser = users.mainUser
    const define = "mainUser"

    return (
        <div className="ShowUserInfo">
            <UserSelect users={props.users} define={define} getBoolean={true} />
            <ClapData mainUser={mainUser} />
            <AddUser />
        </div>
    )
}

export default ShowUserInfo