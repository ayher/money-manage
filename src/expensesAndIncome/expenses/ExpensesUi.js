import React from 'react';
import { Modal, Input,Button } from 'antd';
import './expenses.css'
export default (props) => {
    return (
        <>
            <div className="expensesUi">
                <h4 ><span>资产</span><span onClick={props.addExpenses}>添加</span></h4>
                <div>
                    {props.getExpenses.map((value,index)=>{
                        return <div className="expensesUi-cell" key={index} type="资产"
                        onClick={e=>props.clickGetExpensesUi(e)} index={index}>
                            <span >{Object.keys(value)}</span>
                            <span></span>
                            <span >
                                {value[Object.keys(value)]}
                            </span>
                        </div>
                    })}
                </div>
                <h4 ><span>负责</span><span onClick={props.lostExpenses}>添加</span></h4>
                <div>
                    {props.loseExpenses.map((value,index)=>{
                        return <div className="expensesUi-cell" key={index} type="负责"
                        onClick={e=>props.clickGetExpensesUi(e)} index={index}>
                            <span >{Object.keys(value)}</span>
                            <span></span>
                            <span >
                                {value[Object.keys(value)]}
                            </span>
                        </div>
                    })}
                </div>
            </div>
            <Modal
                title={"添加"+props.modalFro}
                visible={props.expensesVisible}
                onCancel={props.expensesVisibleCancel}
                footer={[
                <Button key="delete"  disabled={props.clickChangeIndex}
                 onClick={props.expensesVisibleDelete}>
                  删除
                </Button>,
                <Button key="sublime" type="primary" onClick={props.expensesVisiblehandleOk}>
                  确定
                </Button>,
                ,
              ]}
            >
                <p ><span>{props.modalFro}来源：</span><Input value={props.expensesFromInput}
                disabled={!props.clickChangeIndex} onChange={props.expensesFromInputChange}/></p>
                <p ><span>{props.modalFro}金额：</span><Input value={props.expensesExpensesInput} 
                onChange={props.expensesExpensesInputChange}/></p>
            </Modal>
        </>
    )
}