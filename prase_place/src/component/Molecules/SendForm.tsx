import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sendPraseAction } from '../../actions/Prase/ActionCreater'
import { PraseData } from '../../state/PraseData'
import '../../style/Molecules/SendForm.css'
import { UserData } from '../../state/UserData'

type Props = {
    mainUser: UserData
    prasedUser: UserData
    nextPrasedActionID: number
}

const SendForm: React.FC<Props> = props => {
    const [praseMessage, setPraseMessage] = useState('')
    const dispatch = useDispatch()
    const onSetPraseMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPraseMessage(e.currentTarget.value)
    }
    const onClickedSendPraseButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        var message = praseMessage.replace(/^\s+/, "")

        if (props.mainUser.userid === props.prasedUser.userid || props.mainUser.name === '' || props.prasedUser.name === '' || message.length < 5) {
            return
        }
        const date = new Date()
        const year: string = date.getFullYear() + ''
        const month: string = (date.getMonth() + 1) + ''
        const day: string = date.getDate() + ''
        const hour: string = date.getHours() + ''
        const minute: string = date.getMinutes() + ''
        const second: string = date.getSeconds() + ''
        const time: string = year + '年' + month + '月' + day + '日' + hour + '時' + minute + '分' + second + '秒'

        const praseData: PraseData = {
            praseActionID: props.nextPrasedActionID,
            praseUser: props.mainUser,
            prasedDoActionUser: props.prasedUser,
            praseMessage: praseMessage,
            clapData: [],
            dateData: time,
            clapNumber: 0
        }
        dispatch(sendPraseAction(praseData))
        setPraseMessage('')
    }
    return (
        <div className="SendForm">
            <textarea className="SendMessage" value={praseMessage} placeholder={'どんどん Praise! しましょう'} onChange={onSetPraseMessage}></textarea>
            <div className="SendMessageButtonContainer">
                <button className="SendMessageButton" onClick={onClickedSendPraseButton}>投稿</button>
            </div>
        </div>
    )
}

export default SendForm