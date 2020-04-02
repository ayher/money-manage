import React from 'react';
import ExpensesUi from './ExpensesUi';
import { message } from 'antd';
import './expenses.css';
import {
	getAsset,
	updateAsset
} from '../../redux/action/expenses';
import { connect } from 'react-redux';
class Expenses extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			getExpenses: [],
			loseExpenses: [],
			expensesVisible: false,
			expensesFromInput: '',
			expensesExpensesInput: '',
			clickChangeIndex: -1,
			modalFro: '',
		}
	}
	componentDidMount() {
		this.props.dispatch(getAsset()).then(() => {
			if (!!this.props.expenses) {
				if (this.props.expenses.getAsset){
					message.info("获取成功")
				}
			}
		})
	}
	expensesFromInputChange = (e) => {
		this.setState({
			expensesFromInput: e.target.value
		})
	}
	expensesExpensesInputChange = (e) => {
		this.setState({
			expensesExpensesInput: e.target.value
		})
	}
	addExpenses = () => {
		this.setState({
			modalFro: '资产',
			expensesVisible: true,
		});
	}
	lostExpenses = () => {
		this.setState({
			modalFro: '负债',
			expensesVisible: true,
		});
	}
	expensesVisiblehandleOk = () => {
		let list;
		if (this.state.modalFro === '资产') list = this.props.expenses.expenses.asset;
		else list = this.props.expenses.expenses.responsible;
		if (this.state.clickChangeIndex === -1) {
			let expensesFromInput = this.state.expensesFromInput;
			let expensesExpensesInput = this.state.expensesExpensesInput;
			for (let value of list) {
				if (expensesFromInput === Object.keys(value)[0]) {
					message.info('来源重复');
					return
				}
			}
			let obj = {}
			obj[expensesFromInput] = Number(expensesExpensesInput);
			list.push(obj)
		}
		else {
			list[this.state.clickChangeIndex][this.state.expensesFromInput] = Number(this.state.expensesExpensesInput);
		}
		let expenses = this.props.expenses.expenses;
		if (this.state.modalFro === '资产'){
			this.setState({
				expensesVisible: false,
				expensesFromInput: '',
				expensesExpensesInput: '',
				clickChangeIndex: -1,
			})
			expenses.asset=list;
		}else{
			this.setState({
				expensesVisible: false,
				loseExpenses: list,
				expensesFromInput: '',
				expensesExpensesInput: '',
				clickChangeIndex: -1,
			})
			expenses.responsible = list;
		}
		this.props.dispatch(updateAsset({ expenses: expenses}))
	
	}
	expensesVisibleDelete = () => {
		let list;
		if (this.state.modalFro === '资产') list = this.props.expenses.expenses.asset;
		else list = this.props.expenses.expenses.responsible;
		list.splice(this.state.clickChangeIndex, 1)
		let expenses = this.props.expenses.expenses;
		if(this.state.modalFro === '资产'){
			this.setState({
				expensesVisible: false,
				clickChangeIndex: -1,
				expensesFromInput: '',
				expensesExpensesInput: ''
			})
			expenses.asset = list;
		}else{
			this.setState({
				expensesVisible: false,
				clickChangeIndex: -1,
				expensesFromInput: '',
				expensesExpensesInput: ''
			})
			expenses.responsible = list;
		}
		this.props.dispatch(updateAsset({ expenses: expenses }))
	}
	expensesVisibleCancel = () => {
		this.setState({
			expensesVisible: false,
			expensesFromInput: '',
			expensesExpensesInput: '',
			clickChangeIndex: -1
		});
	}
	clickGetExpensesUi = (e) => {
		let ty = e.target.parentNode.getAttribute('type');
		let index = e.target.parentNode.getAttribute('index')
		let list;
		if (ty === '资产') list = this.props.expenses.expenses.asset;
		else list = this.props.expenses.expenses.responsible;
		this.setState({
			expensesVisible: true,
			expensesFromInput: Object.keys(list[index]),
			expensesExpensesInput: list[index][Object.keys(list[index])],
			clickChangeIndex: index,
			modalFro: ty,
		});
	}
	render() {
		return (
			<ExpensesUi
				getExpenses={this.props.expenses.expenses ? this.props.expenses.expenses.asset:[]}
				loseExpenses={this.props.expenses.expenses ? this.props.expenses.expenses.responsible : []}
				addExpenses={this.addExpenses}
				expensesVisiblehandleOk={this.expensesVisiblehandleOk}
				expensesVisibleCancel={this.expensesVisibleCancel}
				expensesVisible={this.state.expensesVisible}
				expensesExpensesInputChange={this.expensesExpensesInputChange}
				expensesFromInputChange={this.expensesFromInputChange}
				expensesFromInput={this.state.expensesFromInput}
				expensesExpensesInput={this.state.expensesExpensesInput}
				expensesVisibleDelete={this.expensesVisibleDelete}
				clickChangeIndex={this.state.clickChangeIndex === -1 ? true : false}
				clickGetExpensesUi={this.clickGetExpensesUi}
				modalFro={this.state.modalFro}
				lostExpenses={this.lostExpenses} />
		)
	}
}

const mapStateToProps = state => {
	return {
		expenses: state.expenses,
	};
};
Expenses = connect(mapStateToProps)(Expenses);

export default Expenses;