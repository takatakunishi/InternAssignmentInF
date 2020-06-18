import React from 'react'
import '../../style/Atoms/Icon.css'

type Props = {
    imageurl: string
}

const Icon: React.FC<Props> = (props) => {
    return (
        <div className="Icon">
            <img src={props.imageurl} alt={props.imageurl} />
        </div>
    )
}

export default Icon