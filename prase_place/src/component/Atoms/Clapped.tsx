import React from 'react'
import '../../style/Atoms/Clapped.css'

type Props = {
    clapped: number
}

const Clapped: React.FC<Props> = props => {
    return (
        <div className="Clapped">
            拍手された回数 : {props.clapped}
        </div>
    )
}

export default Clapped