import React from 'react'

export const IncomeExpense = ({netAmount}) => {
    return (
        <div className="incomeExpense">
            <div className="income">
                <h3>INCOME</h3>
                <h1>${netAmount.income}</h1>
            </div> 
            <div className="expense"> 
                <h3>EXPENSE</h3>
                <h1>${netAmount.expense}</h1>

            </div>       
        </div>
    )
}
