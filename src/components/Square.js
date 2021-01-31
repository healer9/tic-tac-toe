import React from 'react'

const Square = ({ onClick, value }) => {
    return (
        <div onClick={onClick} className="square">
            {value}
        </div>
    )
}

export default Square