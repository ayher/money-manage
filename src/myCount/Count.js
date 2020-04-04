import React from 'react';
import CountUi from './CountUi';
import { connect } from 'react-redux';
class Count extends React.Component{
    render(){
        let cash = 0;
        let cashFlow = 0;
        let loseMoney = 0;
        let getMoney=0;
        if (this.props.income.income && this.props.income.outcome){
            let income = this.props.income.income;
            let outcome = this.props.income.outcome;

            getMoney = income.reduce((total, index) => {
                return (total + index[Object.keys(index)]);
            },0)

            loseMoney = outcome.reduce((total, index) => {
                return (total + index[Object.keys(index)]);
            }, 0)
        }
        
        return (<CountUi cash={cash} cashFlow={cashFlow}
            getMoney={getMoney} loseMoney={loseMoney}
            Dvalue={getMoney - loseMoney}/>)
    }
}

const mapStateToProps = state => {
    return {
        income: state.income,
    };
};
Count = connect(mapStateToProps)(Count);
export default Count;