import React from 'react'


export const Record = ({records,close}) => {
    const element=records.map((record)=>{

        let temp= record.amount[0]==="-" ? "minus" : "plus";
        
        
        return(<div className="main-record"><button className="button" onClick={()=>{close(record.id)}}>X</button><div className="transaction-record"><p className="transaction-record-text"> {record.text}</p> <p className="transaction-record-amount"> ${parseFloat(record.amount).toFixed(2)}</p><span className={temp}></span></div></div>)
    })

    return (
        <div className="record">
            
                 <h3>History</h3>
                <div className="recordList scrollbar scrollbar-black thin bordered-black">
                {element}
                </div>
                

        </div>
    )
}
