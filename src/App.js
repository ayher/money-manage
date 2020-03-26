import React from 'react';
import './App.css';
import Expenses from './expensesAndIncome/expenses/Expenses.js';
import Income from './expensesAndIncome/income/Income.js';
import Count from './myCount/Count';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';

function App() {	
	let windowWidth = document.body.offsetWidth;
	return (
		windowWidth<640?
		<Carousel>
				<Income />
				<Count />
				<Expenses />
		</Carousel>:
		<div className="incomeAndExpenses">
				<Income />
				<Count />
				<Expenses />
			</div>
	);
}

export default App;
