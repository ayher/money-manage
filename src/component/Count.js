import React from 'react';
import { useMappedState } from 'redux-react-hook';
import './count.css'
export default (props) => {
    const incomedata = useMappedState(state => state.come.income || [])
    const outcomedata = useMappedState(state => state.come.outcome || [])
    const assetsdata = useMappedState(state => state.balance.assets || [])
    let cash=155550;
    let income = incomedata.reduce((total, value) => (total + Number(value.money)),0)
    let outcome = outcomedata.reduce((total, value) => (total + Number(value.money)),0)
    let cashFlow = assetsdata.reduce((total, value) => (total + Number(value.money)), 0)
    let dvalue = income - outcome;
    return (<div className="CountUi">
        <h2>被动收入: {cashFlow}</h2>
        <h4><span>现金:</span> <span>{cash}</span></h4>
        <p><span>总收入:</span> <span>{income}</span></p>
        <p><span>总支出: </span><span>{outcome}</span></p>
        <div style={{ borderTop: '1px solid #000' }}></div>
        <p><span>收入:</span><span>{dvalue}</span></p>
    </div>)
}