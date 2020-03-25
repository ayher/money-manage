import React from 'react';
import ExpensesUi from './ExpensesUi';
import './expenses.css';
class Expenses extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			asset: [{ '茅台股票': 2000 }, { '苹果股票': 100 }],
			assetUi: [],
			responsibility: [{ '房贷': 1020 }, { '信用卡': 100 }],
			responsibilityUi: [],
			countIcome: 0,
		}
	}
	componentDidMount() {
		let assetUi_test = [];
		let lostMoneyUi_test = [];
		let countIcome_test = 0;
		for (let i = 0; i < this.state.asset.length; i++) {
			for (let k in this.state.asset[i]) {
				countIcome_test += this.state.asset[i][k];
				assetUi_test.push(<div className="expensesUi-cell" key={i}>
					<span >{k}</span>
					<span ></span>
					<span >
						{this.state.asset[i][k]}</span>
				</div>)
			}
		}
		for (let i = 0; i < this.state.responsibility.length; i++) {
			for (let k in this.state.responsibility[i]) {
				countIcome_test -= this.state.responsibility[i][k];
				lostMoneyUi_test.push(<div className="expensesUi-cell" key={i}>
					<span >{k}</span>
					<span ></span>
					<span 	>
						{this.state.responsibility[i][k]}</span>
				</div>)
			}
		}
		this.setState({
			assetUi: assetUi_test,
			responsibilityUi: lostMoneyUi_test,
			countIcome: countIcome_test,
		})
	}
	render() {
		return (
			<ExpensesUi countIcome={this.state.countIcome} assetUi={this.state.assetUi} responsibilityUi={this.state.responsibilityUi} />
		)
	}
}
export default Expenses;