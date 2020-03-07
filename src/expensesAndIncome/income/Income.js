import React from 'react';
import IncomeUi from './IncomeUi';

class Income extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
            getMoney:[{'工资':2000},{'房租':100},{'电影':1020},{'午餐':100},{'电影':1020},{'午餐':100}],
            getMoneyUi:[],
            loseMoney:[{'电影':1020},{'午餐':100},{'电影':1020},{'午餐':100},{'电影':1020},{'午餐':100},{'电影':1020},{'午餐':100}],
            loseMoneyUi:[],
            countIcome:0,
        }
	}
	componentDidMount() {
		let getMoneyUi_test=[];
		let lostMoneyUi_test=[];
		let countIcome_test=0;
		for(let i=0;i<this.state.getMoney.length;i++){
			for(let k in this.state.getMoney[i])
			{
				countIcome_test+=this.state.getMoney[i][k];
				getMoneyUi_test.push(<div className="row"  key={i}>
					<div  className="col-xs-6 col-sm-6" style={{textAlign:'center',textDecoration:'underline'}}>{k}</div>
					<div  className="col-xs-6 col-sm-6 " style={{textAlign:'center',textDecoration:'underline'}}>
					{this.state.getMoney[i][k]}</div>
				</div> )
			}
		}
		for(let i=0;i<this.state.loseMoney.length;i++){
			for(let k in this.state.loseMoney[i])
			{
				countIcome_test-=this.state.loseMoney[i][k];
				lostMoneyUi_test.push(<div className="row" key={i}>
					<div  className="col-xs-6 col-sm-6" style={{textAlign:'center'}}>{k}</div>
					<div  className="col-xs-6 col-sm-6" style={{textAlign:'center'}}>
					{this.state.loseMoney[i][k]}</div>
				</div> )
			}
		}
		this.setState({
			getMoneyUi:getMoneyUi_test,
			loseMoneyUi:lostMoneyUi_test,
			countIcome:countIcome_test,
		})
	}
	render(){
		return (
			<IncomeUi countIcome={this.state.countIcome} getMoneyUi={this.state.getMoneyUi} loseMoneyUi={this.state.loseMoneyUi}/>
		)
	}
}
export default Income;