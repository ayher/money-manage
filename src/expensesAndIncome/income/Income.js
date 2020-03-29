import React from 'react';
import IncomeUi from './IncomeUi';
import { message } from 'antd';
import './income.css';
class Income extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			getMoney: [{ '工资': 2000 }, { '房租': 100 }],
            loseMoney:[{'电影':1020},{'午餐':100}],
			incomeVisible:false,
			incomeFromInput:'',
			incomeMoneyInput:'',
			clickChangeIndex:-1,
			modalFro:'',
		}
		this.clickGetMoneyUi=this.clickGetMoneyUi.bind(this)
	}
	incomeFromInputChange=(e)=>{
		this.setState({
			incomeFromInput:e.target.value
		})
	}
	incomeMoneyInputChange=(e)=>{
		this.setState({
			incomeMoneyInput:e.target.value
		})
	}
	addIncome = () => {
		this.setState({
			modalFro:'收入',
			incomeVisible: true,
		});
	}
	lostIncome=()=>{
		this.setState({
			modalFro:'支出',
			incomeVisible: true,
		});
	}
	incomeVisiblehandleOk=()=>{
		let list;
		if(this.state.modalFro==='收入')list=this.state.getMoney;
		else list=this.state.loseMoney;
		if(this.state.clickChangeIndex===-1){
			let incomeFromInput=this.state.incomeFromInput;
			let incomeMoneyInput=this.state.incomeMoneyInput;
			for( let value of list){
				if(incomeFromInput===Object.keys(value)[0]){
					message.info('来源重复');
					return 
				}
			}
			let obj={}
			obj[incomeFromInput]=Number(incomeMoneyInput);
			list.push(obj)
		}
		else{
			list[this.state.clickChangeIndex][this.state.incomeFromInput]=this.state.incomeMoneyInput;
		}
		this.state.modalFro==='收入'?
			this.setState({
				incomeVisible: false,
				getMoney:list,
				incomeFromInput:'',
				incomeMoneyInput:'',
				clickChangeIndex:-1,
			}):
			this.setState({
				incomeVisible: false,
				loseMoney:list,
				incomeFromInput:'',
				incomeMoneyInput:'',
				clickChangeIndex:-1,
			})
	}
	incomeVisibleDelete=()=>{
		let list;
		if(this.state.modalFro==='收入')list=this.state.getMoney;
		else list=this.state.loseMoney;
		list.splice(this.state.clickChangeIndex,1)
		this.state.modalFro==='收入'?
		this.setState({
			incomeVisible: false,
			getMoney:list,
			clickChangeIndex:-1,
			incomeFromInput:'',
			incomeMoneyInput:''
		}):this.setState({
			incomeVisible: false,
			loseMoney:list,
			clickChangeIndex:-1,
			incomeFromInput:'',
			incomeMoneyInput:''
		})
	}
	incomeVisibleCancel = () => {
		this.setState({
			incomeVisible: false,
			incomeFromInput:'',
			incomeMoneyInput:'',
			clickChangeIndex:-1
		});
	}
	clickGetMoneyUi=(e)=>{
		let ty=e.target.parentNode.getAttribute('type');
		let index=e.target.parentNode.getAttribute('index')
		let list;
		if(ty==='收入')list=this.state.getMoney;
		else list=this.state.loseMoney;
		this.setState({
			incomeVisible: true,
			incomeFromInput:Object.keys(list[index]),
			incomeMoneyInput:list[index][Object.keys(list[index])],
			clickChangeIndex:index,
			modalFro:ty,
		});
	}
	componentDidMount() {
	}
	render(){
		return (
			<IncomeUi
				getMoney={this.state.getMoney} 
				loseMoney={this.state.loseMoney}
				addIncome={this.addIncome}
				incomeVisiblehandleOk={this.incomeVisiblehandleOk}
				incomeVisibleCancel={this.incomeVisibleCancel}
				incomeVisible={this.state.incomeVisible}	
				incomeMoneyInputChange={this.incomeMoneyInputChange}
				incomeFromInputChange={this.incomeFromInputChange}
				incomeFromInput={this.state.incomeFromInput}
				incomeMoneyInput={this.state.incomeMoneyInput}
				incomeVisibleDelete={this.incomeVisibleDelete}
				clickChangeIndex={this.state.clickChangeIndex===-1?true:false}
				clickGetMoneyUi={this.clickGetMoneyUi}
				modalFro={this.state.modalFro}
				lostIncome={this.lostIncome}
			/>
		)
	}
}
export default Income;