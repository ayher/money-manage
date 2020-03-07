import React from 'react';
export default (props)=>{
	return (
		<div className="row" style={{border:'1px #000 solid'}}>
			<h1 style={{textAlign:'center'}}>收入支出表</h1>

			<h2 style={{background:'#000',color:'#fff',textAlign:'center'}}>收入</h2>

			{props.getMoneyUi}

			<h2 style={{background:'#000',color:'#fff',textAlign:'center'}}>支出</h2>

			{props.loseMoneyUi}

			<h3>现金流为{props.countIcome}</h3>
		</div>
	)
}