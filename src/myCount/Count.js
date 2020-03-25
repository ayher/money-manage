import React from 'react';
import CountUi from './CountUi'
class Count extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cash:100000,
            cashFlow:900,
            getMoney:2000,
            loseMoney:500,
            Dvalue: 0,
        }
    }
    componentDidMount(){
        this.setState({
            Dvalue:this.state.getMoney - this.state.loseMoney
        })
    }
    render(){
        return (<CountUi cash={this.state.cash} cashFlow={this.state.cashFlow}
            getMoney={this.state.getMoney} loseMoney={this.state.loseMoney}
            Dvalue={this.state.Dvalue}/>)
    }
}
export default Count;