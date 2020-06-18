import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../../style/Molecules/AddUser.css'
import { UserData } from '../../state/UserData'
import { addUserAction } from '../../actions/Users/ActionCreater'
import RootState from '../../state'

const AddUser: React.FC = () => {
    const data = useSelector<RootState, RootState['user']>(state => state.user);
    const dispatch = useDispatch()
    const [userName, setUserName] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const onSetUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.currentTarget.value);
    }
    const onSetImageUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImageUrl(e.currentTarget.value);
    }
    const onClickUserAddButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const name = userName.replace(/^\s+/, "")
        const image = imageUrl.replace(/^\s+/, "")
        if (name === '' || image === '') {
            return
        }
        var idnumber = data.users.length
        var user: UserData = {
            userid: idnumber,
            name: userName,
            clapped: 0,
            enableClap: 100,
            imageurl: imageUrl
        }
        dispatch(addUserAction(user))
        setUserName('')
        setImageUrl('')
    }

    return (
        <div className="AddUser">
            <input value={userName} className="InputUserName" placeholder="ユーザー名を入力" id="InputUserName" onChange={onSetUserName} />
            <input value={imageUrl} className="InputImageUrl" placeholder="アイコンのurlを入力" id="InputImageUrl" onChange={onSetImageUrl} />
            <button className="submitUser" onClick={onClickUserAddButton}>ユーザーを追加</button>
        </div>
    )
}

export default AddUser