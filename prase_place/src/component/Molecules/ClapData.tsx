import React from 'react'
import '../../style/Molecules/ClapData.css'
import CanClap from '../Atoms/CanClap'
import Clapped from '../Atoms/Clapped'
import { UserData } from '../../state/UserData'

type Props = {
    mainUser: UserData
}

const ClapData: React.FC<Props> = prop => {
    return (
        <div className="ClapData">
            <CanClap enableClap={prop.mainUser.enableClap} />
            <Clapped clapped={prop.mainUser.clapped} />
        </div>
    )
}

export default ClapData