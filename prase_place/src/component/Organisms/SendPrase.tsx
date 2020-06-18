import React from 'react'
import '../../style/Organisms/SendPrase.css'
import UserSelect from '../Molecules/UserSelect'
import SendForm from '../Molecules/SendForm'
import { Users, UserData } from '../../state/UserData'

type Props = {
    users: Users
    mainUser: UserData
    prasedUser: UserData
    nextPrasedActionID: number
}

const SendPrase: React.FC<Props> = props => {
    const define = "prasedUser"
    return (
        <div className="SendPrase">
            <UserSelect users={props.users} define={define} getBoolean={true} />
            <SendForm mainUser={props.mainUser} prasedUser={props.prasedUser} nextPrasedActionID={props.nextPrasedActionID} />
        </div>
    )
}

export default SendPrase