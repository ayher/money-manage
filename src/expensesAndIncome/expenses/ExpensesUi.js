import React from 'react';
import './expenses.css'
export default (props) => {
    return (
        <div className="expensesUi">
            <h4 >资产</h4>
            <div>
                {props.assetUi}
            </div>
            <h4 >负债</h4>
            <div>
                {props.responsibilityUi}
            </div>
        </div>
    )
}