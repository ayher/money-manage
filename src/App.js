import React from 'react';
import './App.css';
import Expenses from './expensesAndIncome/expenses/Expenses.js';
import Income from './expensesAndIncome/income/Income.js';

function App() {	
  return (
		<div className="container">
		    <div className="row" >
		        <div className="col-xs-12 col-sm-6 " >
		            <Income />
		        </div>
		        <div className="col-xs-12 col-sm-6 "
		         style={{background:'#995'}} >
		            <Expenses />
		        </div>
		    </div>
		</div>
  );
}

export default App;
