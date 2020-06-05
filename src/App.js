import React from 'react';
import './App.css';
import Come from './component/Come'
import Count from './component/Count';
import Balance from './component/Balance'

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
						<Come />
						<Count />
						<Balance />
					</Carousel> :
					<div className="incomeAndExpenses" >
						<Come />
						<Count />
						<Balance />
					</div>
				}
			</>
		);
	}
	
}

export default App;