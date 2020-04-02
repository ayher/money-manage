import React from 'react';
import IncomeUi from './IncomeUi';
import { message } from 'antd';
import {
	getIncome,
	updateIncome
} from '../../redux/action/income';
import './income.css';
import { connect } from 'react-redux';
class Income extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			getMoney: [],
			loseMoney: [],
			incomeVisible: false,
			incomeFromInput: '',
			incomeMoneyInput: '',
			clickChangeIndex: -1,
			modalFro: '',
		}
		this.clickGetMoneyUi = this.clickGetMoneyUi.bind(this)
	}
	incomeFromInputChange = (e) => {
		this.setState({
			incomeFromInput: e.target.value
		})
	}
	incomeMoneyInputChange = (e) => {
		this.setState({
			incomeMoneyInput: e.target.value
		})
	}
	addIncome = () => {
		this.setState({
			modalFro: '收入',
			incomeVisible: true,
		});
	}
	lostIncome = () => {
		this.setState({
			modalFro: '支出',
			incomeVisible: true,
		});
	}
	incomeVisiblehandleOk = () => {
		let list;
		if (this.state.modalFro === '收入') list = this.props.income.income.income;
		else list = this.props.income.income.outcome;
		if (this.state.clickChangeIndex === -1) {
			let incomeFromInput = this.state.incomeFromInput;
			let incomeMoneyInput = this.state.incomeMoneyInput;
			for (let value of list) {
				if (incomeFromInput === Object.keys(value)[0]) {
					message.info('来源重复');
					return
				}
			}
			let obj = {}
			obj[incomeFromInput] = Number(incomeMoneyInput);
			list.push(obj)
		}
		else {
			list[this.state.clickChangeIndex][this.state.incomeFromInput] = Number(this.state.incomeMoneyInput);
		}
		console.log(list,'1111111111111111111111')
		let income = this.props.income.income;
		if(this.state.modalFro === '收入'){
				this.setState({
					incomeVisible: false,
					incomeFromInput: '',
					incomeMoneyInput: '',
					clickChangeIndex: -1,
				});
				income.income = list;
			}else{
				this.setState({
					incomeVisible: false,
					incomeFromInput: '',
					incomeMoneyInput: '',
					clickChangeIndex: -1,
				});
				income.outcome = list;
			}
		this.props.dispatch(updateIncome({ income: income }));
	}
	incomeVisibleDelete = () => {
		let list;
		if (this.state.modalFro === '收入') list = this.props.income.income.income;
		else list = this.props.income.income.outcome;
		list.splice(this.state.clickChangeIndex, 1)
		let income = this.props.income.income;
		if (this.state.modalFro === '收入') {
			this.setState({
				incomeVisible: false,
				clickChangeIndex: -1,
				incomeFromInput: '',
				incomeMoneyInput: ''
			})
			income.income = list;
		} else {
			this.setState({
				incomeVisible: false,
				clickChangeIndex: -1,
				incomeFromInput: '',
				incomeMoneyInput: ''
			})
			income.outcome = list;
		}
		this.props.dispatch(updateIncome({ income: income }));
	}
	incomeVisibleCancel = () => {
		this.setState({
			incomeVisible: false,
			incomeFromInput: '',
			incomeMoneyInput: '',
			clickChangeIndex: -1
		});
	}
	clickGetMoneyUi = (e) => {
		let ty = e.target.parentNode.getAttribute('type');
		let index = e.target.parentNode.getAttribute('index')
		let list;
		if (ty === '收入') list = this.props.income.income.income;
		else list = this.props.income.income.outcome;
		this.setState({
			incomeVisible: true,
			incomeFromInput: Object.keys(list[index]),
			incomeMoneyInput: list[index][Object.keys(list[index])],
			clickChangeIndex: index,
			modalFro: ty,
		});
	}
	componentDidMount() {
		this.props.dispatch(getIncome()).then(() => {
			if (!!this.props.income) {
				if (!!this.props.income.income) {
					message.info("获取数据成功")
				}

			}
		})

	}
	render() {
		return (
			<IncomeUi
				getMoney={this.props.income.income ? this.props.income.income.income : []}
				loseMoney={this.props.income.income ? this.props.income.income.outcome : []}
				addIncome={this.addIncome}
				incomeVisiblehandleOk={this.incomeVisiblehandleOk}
				incomeVisibleCancel={this.incomeVisibleCancel}
				incomeVisible={this.state.incomeVisible}
				incomeMoneyInputChange={this.incomeMoneyInputChange}
				incomeFromInputChange={this.incomeFromInputChange}
				incomeFromInput={this.state.incomeFromInput}
				incomeMoneyInput={this.state.incomeMoneyInput}
				incomeVisibleDelete={this.incomeVisibleDelete}
				clickChangeIndex={this.state.clickChangeIndex === -1 ? true : false}
				clickGetMoneyUi={this.clickGetMoneyUi}
				modalFro={this.state.modalFro}
				lostIncome={this.lostIncome}
			/>
		)
	}
}

const mapStateToProps = state => {
	return {
		income: state.income,
	};
};
Income = connect(mapStateToProps)(Income);
export default Income;