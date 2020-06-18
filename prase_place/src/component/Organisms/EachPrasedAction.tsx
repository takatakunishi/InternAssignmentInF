import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clappUserAction } from '../../actions/Prase/ActionCreater'
import { clapAction } from '../../actions/Users/ActionCreater'
import RootState from '../../state'
import '../../style/Organisms/EachPrasedAction.css'
import { PraseData, ClapUser, ClapData } from '../../state/PraseData'
import { Users, UserData, AboutClapActionUser } from '../../state/UserData'
import Icon from '../Atoms/Icon'

type Props = {
    eachPrase: PraseData
    mainUser: UserData
}

const clapUserDatas = (eachPrase: ClapData, users: Users) => {
    eachPrase.sort((a, b) => {
        if (a.numberOfClap - b.numberOfClap === 0) {
            return a.doClapUserID - b.doClapUserID
        } else {
            return a.numberOfClap - b.numberOfClap
        }
    })

    return eachPrase.reverse().map((clapUser: ClapUser) => {
        const result = users.find(user => user.userid === clapUser.doClapUserID)
        return <div className="clapUserData" key={clapUser.doClapUserID} >{result?.name}:{clapUser.numberOfClap}</div>
    })
}

const EachPrasedAction: React.FC<Props> = props => {
    const dispatch = useDispatch()
    const userData = useSelector<RootState, RootState['user']>(state => state.user);
    const checkAboutClapUser = (eachPrase: PraseData, mainUser: UserData): boolean => {
        var result: boolean
        if (eachPrase.prasedDoActionUser.userid === mainUser.userid) {
            result = false
        } else if (eachPrase.praseUser.userid === mainUser.userid) {
            result = false
        } else if (mainUser.enableClap < 2) {
            result = false
        } else {
            result = true
        }
        return result
    }
    const onClickedClapButton = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        var newEachPrase: PraseData = props.eachPrase
        const mainUserIndex: number = (newEachPrase.clapData).findIndex((clapUser: ClapUser) => {
            const result: boolean = (clapUser.doClapUserID === props.mainUser.userid)
            return result
        })
        const aboutClapActionUser: AboutClapActionUser = {
            clappUserID: props.mainUser.userid,
            doPraseActionUserID: props.eachPrase.prasedDoActionUser.userid,
            prasedUserID: props.eachPrase.praseUser.userid
        }


        if (mainUserIndex === -1) {
            const newClapUser: ClapUser = {
                doClapUserID: props.mainUser.userid,
                numberOfClap: 1
            }


            if (checkAboutClapUser(props.eachPrase, props.mainUser)) {
                newEachPrase.clapData = [...newEachPrase.clapData, newClapUser]
                newEachPrase.clapNumber += 1
                dispatch(clappUserAction(newEachPrase))
                dispatch(clapAction(aboutClapActionUser))
            }
            return
        } else {
            if (newEachPrase.clapData[mainUserIndex].numberOfClap > 14) {
                return
            } else if ((newEachPrase.clapData[mainUserIndex].numberOfClap < 15)) {
                if (checkAboutClapUser(props.eachPrase, props.mainUser)) {
                    newEachPrase.clapData[mainUserIndex].numberOfClap += 1
                    newEachPrase.clapNumber += 1
                    dispatch(clappUserAction(newEachPrase))
                    dispatch(clapAction(aboutClapActionUser))
                }
                return
            } else {
                return
            }
        }
    }

    return (
        <div className="EachPrasedAction">
            <div className="EachPrasedActionUserData">
                <div className="EachPrasedEachUser">
                    <Icon imageurl={props.eachPrase.praseUser.imageurl} />
                    <div className="EachPrasedEachUserName">{props.eachPrase.praseUser.name}</div>
                </div>
                <div className="EachPrasedActionCenter">紹介<br />＝＞</div>
                <div className="EachPrasedEachUser">
                    <Icon imageurl={props.eachPrase.prasedDoActionUser.imageurl} />
                    <div className="EachPrasedEachUserName">{props.eachPrase.prasedDoActionUser.name}</div>
                </div>
            </div>
            <div className="PrasedActionDetail">
                <div className="PrasedMessage">{props.eachPrase.praseMessage}</div>
                <div className="ClapButtonContainer">

                    <div className="ClapButton" onClick={onClickedClapButton}>
                        拍手する！
                    </div>
                    <div className="ClapNumber" >
                        {props.eachPrase.clapNumber}回拍手が鳴り響いた！
                    </div>
                    <div className="addClapUserData">
                        {clapUserDatas(props.eachPrase.clapData, userData.users)}
                    </div>
                </div>
                <div className="PrasedDate">{props.eachPrase.dateData}</div>
            </div>
        </div>
    )
}

export default EachPrasedAction