import React from 'react'
import ShowUserInfo from '../Organisms/ShowUserInfo'
import { useSelector } from 'react-redux'
import RootState from '../../state'
import SendPrase from '../Organisms/SendPrase'
import ShowPrases from '../Organisms/ShowPrases'
import '../../style/Templates/PrasePlaceTemplate.css'

const PrasePlaceTemplate: React.FC = () => {
    const userData = useSelector<RootState, RootState['user']>(state => state.user);
    const praseData = useSelector<RootState, RootState['prase']>(state => state.prase);
    const mainUser = userData.mainUser
    const prasedUser = userData.prasedUser
    const nextPrasedActionID: number = praseData.length

    return (
        <div className="PrasePlaceTemplate">
            <ShowUserInfo users={userData.users} />
            <SendPrase users={userData.users} mainUser={mainUser} prasedUser={prasedUser} nextPrasedActionID={nextPrasedActionID} />
            <ShowPrases mainUser={mainUser} />
        </div>
    )
}

export default PrasePlaceTemplate