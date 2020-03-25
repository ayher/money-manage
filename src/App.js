import React from 'react';
import './App.css';
import Expenses from './expensesAndIncome/expenses/Expenses.js';
import Income from './expensesAndIncome/income/Income.js';
import Count from './myCount/Count';

function App() {	
  return (
	  <div className="incomeAndExpenses">
		    <Income />
		  	<Count />
		    <Expenses />
		</div>
  );
}

export default App;
