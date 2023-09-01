import React from 'react'

const Loading = () => {
    return (
        <article className="main-spinner">
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </article>
    )
}

export default Loading