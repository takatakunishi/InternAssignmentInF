import React from 'react'
import '../../style/Atoms/CanClap.css'

type Props = {
    enableClap: number
}

const CanClap: React.FC<Props> = props => {
    return (
        <div className="CanClap">
            拍手できる回数 : {props.enableClap}
        </div>
    )
}

export default CanClap