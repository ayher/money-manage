import React from 'react';
export default (props)=>{
	return (
		<div  className="incomeUi">
			<h4>收入</h4>
			<div >
				{props.getMoneyUi}
			</div>
			<h4>支出</h4>
			<div >
				{props.loseMoneyUi}
			</div>
		</div>
	)
}