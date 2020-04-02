import React from 'react';
import './App.css';
import Expenses from './expensesAndIncome/expenses/Expenses.js';
import Income from './expensesAndIncome/income/Income.js';
import Count from './myCount/Count';

import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import Head from './head/Head'

const list = ["收支详情", "收支总览", "资产负债"]

class App extends React.Component {
	constructor(props){
		super(props)
		this.state={
			titleIndex:0,
		}
	}
	render(){
		let windowWidth = document.body.offsetWidth;
		return (
			<>
				<Head title={list[this.state.titleIndex]}/>
				{windowWidth < 640 ?
					<Carousel afterChange={(e)=>{
						this.setState({ titleIndex:e})
					}} >
						<Income />
						<Count />
						<Expenses />
					</Carousel> :
					<div className="incomeAndExpenses" >
						<Income />
						<Count />
						<Expenses />
					</div>
				}
			</>
	);


	}
	
}

export default App;