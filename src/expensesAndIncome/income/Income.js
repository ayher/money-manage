import React from 'react';
import IncomeUi from './IncomeUi';
import './income.css';
class Income extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			getMoney: [{ '工资': 2000 }, { '房租': 100 }, { '工资': 2000 }, { '房租': 100 }],
            getMoneyUi:[],
            loseMoney:[{'电影':1020},{'午餐':100}],
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
				getMoneyUi_test.push(<div className="incomeUi-cell" key={i}>
					<span >{k}</span>
					<span></span>
					<span >
						{this.state.getMoney[i][k]}</span>
				</div> )
			}
		}
		for(let i=0;i<this.state.loseMoney.length;i++){
			for(let k in this.state.loseMoney[i])
			{
				countIcome_test-=this.state.loseMoney[i][k];
				lostMoneyUi_test.push(<div className="incomeUi-cell" key={i}>
					<span >{k}</span>
					<span></span>
					<span >
						{this.state.loseMoney[i][k]}</span>
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