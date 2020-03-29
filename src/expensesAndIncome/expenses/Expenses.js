import React from 'react';
import ExpensesUi from './ExpensesUi';
import { message } from 'antd';
import './expenses.css';
import {
	getResponsible,
	getAsset
} from '../../redux/action/expenses';
import { connect } from 'react-redux';
class Expenses extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			getExpenses: [],
			loseExpenses: [],
			expensesVisible:false,
			expensesFromInput:'',
			expensesExpensesInput:'',
			clickChangeIndex:-1,
			modalFro:'',
		}
	}
	componentDidMount() {
		this.props.dispatch(getAsset()).then(() => {
			if (!!this.props.expenses) {
				if (!!this.props.expenses.getAsset) {
					this.setState({
						getExpenses: this.props.expenses.getAsset
					})
				}

			}
		})

		this.props.dispatch(getResponsible()).then(() => {
			if (!!this.props.expenses) {
				if (!!this.props.expenses.getResponsible) {
					this.setState({
						loseExpenses: this.props.expenses.getResponsible
					})
				}

			}
		}) 
	}
	expensesFromInputChange=(e)=>{
		this.setState({
			expensesFromInput:e.target.value
		})
	}
	expensesExpensesInputChange=(e)=>{
		this.setState({
			expensesExpensesInput:e.target.value
		})
	}
	addExpenses = () => {
		this.setState({
			modalFro:'资产',
			expensesVisible: true,
		});
	}
	lostExpenses=()=>{
		this.setState({
			modalFro:'负债',
			expensesVisible: true,
		});
	}
	expensesVisiblehandleOk=()=>{
		let list;
		if(this.state.modalFro==='资产')list=this.state.getExpenses;
		else list=this.state.loseExpenses;
		if(this.state.clickChangeIndex===-1){
			let expensesFromInput=this.state.expensesFromInput;
			let expensesExpensesInput=this.state.expensesExpensesInput;
			for( let value of list){
				if(expensesFromInput===Object.keys(value)[0]){
					message.info('来源重复');
					return 
				}
			}
			let obj={}
			obj[expensesFromInput]=Number(expensesExpensesInput);
			list.push(obj)
		}
		else{
			list[this.state.clickChangeIndex][this.state.expensesFromInput]=this.state.expensesExpensesInput;
		}
		this.state.modalFro==='资产'?
			this.setState({
				expensesVisible: false,
				getExpenses:list,
				expensesFromInput:'',
				expensesExpensesInput:'',
				clickChangeIndex:-1,
			}):
			this.setState({
				expensesVisible: false,
				loseExpenses:list,
				expensesFromInput:'',
				expensesExpensesInput:'',
				clickChangeIndex:-1,
			})
	}
	expensesVisibleDelete=()=>{
		let list;
		if(this.state.modalFro==='资产')list=this.state.getExpenses;
		else list=this.state.loseExpenses;
		list.splice(this.state.clickChangeIndex,1)
		this.state.modalFro==='资产'?
		this.setState({
			expensesVisible: false,
			getExpenses:list,
			clickChangeIndex:-1,
			expensesFromInput:'',
			expensesExpensesInput:''
		}):this.setState({
			expensesVisible: false,
			loseExpenses:list,
			clickChangeIndex:-1,
			expensesFromInput:'',
			expensesExpensesInput:''
		})
	}
	expensesVisibleCancel = () => {
		this.setState({
			expensesVisible: false,
			expensesFromInput:'',
			expensesExpensesInput:'',
			clickChangeIndex:-1
		});
	}
	clickGetExpensesUi=(e)=>{
		let ty=e.target.parentNode.getAttribute('type');
		let index=e.target.parentNode.getAttribute('index')
		let list;
		if(ty==='资产')list=this.state.getExpenses;
		else list=this.state.loseExpenses;
		this.setState({
			expensesVisible: true,
			expensesFromInput:Object.keys(list[index]),
			expensesExpensesInput:list[index][Object.keys(list[index])],
			clickChangeIndex:index,
			modalFro:ty,
		});
	}
	render() {
		return (
			<ExpensesUi 
			getExpenses={this.state.getExpenses} 
			loseExpenses={this.state.loseExpenses}
			addExpenses={this.addExpenses}
			expensesVisiblehandleOk={this.expensesVisiblehandleOk}
			expensesVisibleCancel={this.expensesVisibleCancel}
			expensesVisible={this.state.expensesVisible}	
			expensesExpensesInputChange={this.expensesExpensesInputChange}
			expensesFromInputChange={this.expensesFromInputChange}
			expensesFromInput={this.state.expensesFromInput}
			expensesExpensesInput={this.state.expensesExpensesInput}
			expensesVisibleDelete={this.expensesVisibleDelete}
			clickChangeIndex={this.state.clickChangeIndex===-1?true:false}
			clickGetExpensesUi={this.clickGetExpensesUi}
			modalFro={this.state.modalFro}
			lostExpenses={this.lostExpenses}/>
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