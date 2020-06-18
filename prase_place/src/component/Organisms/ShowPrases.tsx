import React from 'react'
import '../../style/Organisms/ShowPrases.css'
import { useSelector } from 'react-redux'
import RootState from '../../state'
import EachPrasedAction from './EachPrasedAction'
import { PraseState, PraseData } from '../../state/PraseData'
import { UserData } from '../../state/UserData'

type Props = {
    mainUser: UserData
}




const ShowPrases: React.FC<Props> = props => {
    const praseData = useSelector<RootState, RootState['prase']>(state => state.prase);
    const eachPrasedData = (praseData: PraseState, mainUser: UserData) => {
        praseData.sort((a, b) => {
            return a.praseActionID - b.praseActionID
        })

        return praseData.reverse().map((eachPrase: PraseData) => {
            return <EachPrasedAction eachPrase={eachPrase} mainUser={mainUser} key={eachPrase.praseActionID} />
        })
    }
    return (
        <div className="ShowPrases">
            {eachPrasedData(praseData, props.mainUser)}
        </div>
    )
}

export default ShowPrases