import React from 'react';
import './count.css'
export default (props) => {
    return (<div className="CountUi">
        <h2>被动收入: {props.cashFlow}</h2>
        <h4><span>现金:</span> <span>{props.cash}</span></h4>
        <p><span>总收入:</span> <span>{props.getMoney}</span></p>
        <p><span>总支出: </span><span>{props.loseMoney}</span></p>
        <div style={{borderTop:'1px solid #000'}}></div>
        <p><span>收入:</span><span>{props.Dvalue}</span></p>
    </div>)
}