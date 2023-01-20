import React from 'react'
import './style/Loading.css'

/* loading spinner */
function Loading({ size }) {
    return (
        <div className={`${size} lds-roller`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Loading