import React from 'react';
import { Modal, Input,Button } from 'antd';
export default (props)=>{
	return (
		<>
		<div  className="incomeUi">
			<h4><span>收入</span><span onClick={props.addIncome}>添加</span></h4>
			<div >
				{
					props.getMoney.map((value,index)=>{
						return (<div className="incomeUi-cell"  type="收入"
							key={index} onClick={e=>props.clickGetMoneyUi(e)} index={index}>
							<span >{Object.keys(value)}</span>
							<span></span>
							<span >
								{value[Object.keys(value)]}
							</span>
						</div>)
					})
				}
			</div>
			<h4><span>支出</span><span onClick={props.lostIncome}>添加</span></h4>
			<div >
				{
					props.loseMoney.map((value,index)=>{
					return (
						<div className="incomeUi-cell" key={index} type="支出"
						onClick={e=>props.clickGetMoneyUi(e)} index={index}>
							<span >{Object.keys(value)}</span>
							<span></span>
							<span >
								{value[Object.keys(value)]}
							</span>
						</div>)
					})
				}
			</div>
		</div>
		<Modal
			title={"添加"+props.modalFro}
			visible={props.incomeVisible}
			onCancel={props.incomeVisibleCancel}
			footer={[
			<Button key="delete"  disabled={props.clickChangeIndex}
			 onClick={props.incomeVisibleDelete}>
              删除
            </Button>,
            <Button key="sublime" type="primary" onClick={props.incomeVisiblehandleOk}>
              确定
            </Button>,
            ,
          ]}
		>
			<p ><span>{props.modalFro}来源：</span><Input value={props.incomeFromInput}
			disabled={!props.clickChangeIndex} onChange={props.incomeFromInputChange}/></p>
			<p ><span>{props.modalFro}金额：</span><Input value={props.incomeMoneyInput} 
			onChange={props.incomeMoneyInputChange}/></p>
		</Modal>
		</>
	)
}