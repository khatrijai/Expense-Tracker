import React from 'react'

export const Balance = ({netAmount}) => {
    return (
        <div className="balance">
            <h4>YOUR BALANCE</h4>
            <h1 className={parseFloat(netAmount.net)>0? "positive":(parseFloat(netAmount.net)<0?"negative":"zero")}>${Math.abs(parseFloat(netAmount.net))}</h1>
            
        </div>
    )
}
