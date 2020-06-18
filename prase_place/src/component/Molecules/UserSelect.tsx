import React, { useState } from 'react'
import '../../style/Molecules/UserSelect.css'
import { useDispatch } from 'react-redux'
import Icon from '../Atoms/Icon'
import { Users, UserData } from '../../state/UserData'
import { setMainUserAction, setPrasedUserAction } from '../../actions/Users/ActionCreater'

type Props = {
    users: Users
    define: string
    getBoolean: boolean
    onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
}

const putEachUser = (users: Users) => {
    const userlist = users.map((user: UserData) => {
        return <option key={user.userid} value={user.userid}>{user.name}</option>
    });
    return userlist
}



const UserSelect: React.FC<Props> = props => {
    const [iconImge, setIconImage] = useState('none')
    const [userid, setUserId] = useState('')
    const dispatch = useDispatch()

    const onChangeSelectedUser = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setUserId(e.target.value)
        changeIcon(e.target.value)
        if (props.getBoolean && props.define === "mainUser") {

            props.users.forEach((user: UserData) => {
                if (user.userid === parseInt(e.target.value)) {
                    dispatch(setMainUserAction(user))
                }
            })
        } else if (props.getBoolean && props.define === "prasedUser") {

            props.users.forEach((user: UserData) => {
                if (user.userid === parseInt(e.target.value)) {
                    dispatch(setPrasedUserAction(user))
                }
            })
        }
    }

    const changeIcon = (userid: string) => {
        props.users.forEach(user => {
            if (user.userid === parseInt(userid)) {
                setIconImage(user.imageurl)
            }
        })
    }

    return (
        <div className="UserSelect">
            <div className="IconContainer">
                <Icon imageurl={iconImge} />
            </div>
            <div className="selectedUserContainer">
                <select id={props.define} name="selectedUser" className="selectedUser" value={userid} onChange={onChangeSelectedUser}>
                    <option value="" hidden>ユーザーを選択</option>
                    {putEachUser(props.users)}
                </select>
            </div>
        </div>
    )
}

export default UserSelect