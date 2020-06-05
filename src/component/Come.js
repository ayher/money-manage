import React,{useState, useEffect} from 'react';
import { css } from 'emotion'
import { Modal, Button, Input} from 'antd';
import { useMappedState, useDispatch } from 'redux-react-hook';
import { 
    getIncome, 
    addIncome,
    deleteIncome,
    getOutcome,
    addOutcome,
    deleteOutcome,
    updateIncome,
    updateOutcome
} from '../redux/action/come'

const typeadd='添加',typeupdate='修改'
// props={name,list,addFun,deleteFun,updateFun}
const ComeTemplate = props=>{
    let [modalVisible, setModalVisible]=useState(false)
    let [modalType, setModalType]=useState('')
    let [modalInputValue, setModalInputValue]=useState({type:'',money:0})
    return (
        <>
            <div className={css`
                    height:50%;
                    width:100%;
                    padding:10px 10px;
                    display: flex;
                    flex-direction:column;
                `}>
            <h4 className={css`
                display:flex;
                background:#000;
                padding:2px;
                color:#fff;
            `}>
                <span className={css`flex:85%`}>{props.name}</span>
                <span
                    className={css`
                        flex:15%;
                        text-align:center;
                        background:#fff;
                        color:#000;
                    `} onClick={
                        ()=>{
                            setModalInputValue({ type: '', money: 0 })
                            setModalType(typeadd)
                            setModalVisible(true)
                        }
                    }>添加</span>
            </h4>
            <div >
                {
                    props.list.map((value, index) => {
                        return (<div key={index} 
                            onClick={(e) => {
                                let index = e.target.parentNode.getAttribute('index')
                                setModalInputValue(props.list[index])
                                setModalType(typeupdate)
                                setModalVisible(true)
                            }}
                            index={index} className={css`
                            display: flex;
                            justify-content:center;
                            text-align:center;
                            >span:nth-child(1){
                                flex:60%;
                                border-bottom: 1px solid #000;
                            }
                            >span:nth-child(2){
                                flex:10%;
                                border: none;
                            }
                            >span:nth-child(3){
                                flex:30%;
                                border-bottom: 1px solid #000;
                            }
                        `}>
                            <span >{value.type}</span>
                            <span></span>
                            <span >
                                {value.money}
                            </span>
                        </div>)
                    })
                }
            </div>
            </div>
            <Modal
                title={modalType + props.name}
                visible={modalVisible}
                onCancel={() => setModalVisible(false)}
                footer={[
                    <Button key="delete" 
                        disabled={modalType === typeadd}
                        onClick={
                            ()=>{
                                props.deleteFun(modalInputValue.id)
                                setModalVisible(false)
                            }
                        }>
                        删除
                    </Button>,
                    <Button key="sublime" type="primary" 
                        onClick={() => {
                            if (modalType === typeadd) props.addFun({ 
                                    type: modalInputValue.type,
                                    money: modalInputValue.money
                                });
                            else props.updateFun({ id: modalInputValue.id, money: modalInputValue.money});
                            setModalVisible(false)
                        }}>
                        确定
                    </Button>,
                ]}
            >
                <p ><span>{props.modalFro}来源：</span><Input value={modalInputValue.type}
                     onChange={(e)=>{
                         let value = e.target.value
                         setModalInputValue(v => ({ ...v, type: value}))
                     }} /></p>
                <p ><span>{props.modalFro}金额：</span><Input value={modalInputValue.money}
                    onChange={(e) => {
                        let value = e.target.value
                        setModalInputValue(v => ({ ...v, money: value }))
                    }} /></p>
            </Modal>
        </>
    )
}

const Come = props => {
    const dispatch = useDispatch()
    const incomedata = useMappedState(state => state.come.income || [])
    const outcomedata = useMappedState(state => state.come.outcome || [])
    useEffect(()=>{
        getIncome().then(e=>{
            dispatch(e)
        })
        getOutcome().then(e=>{
            dispatch(e)
        })
    },[])
    return (<div className={css`height:100%;width:100%`}>
        <ComeTemplate name="收入" type="income" 
            list={incomedata} 
            addFun={(data)=>{
                addIncome(data).then(e=>{
                    dispatch(e)
                })
            }}
            updateFun={(data)=>{
                updateIncome(data).then((e)=>{
                    dispatch(e)
                })
            }}
            deleteFun={(id)=>{
                deleteIncome({id:id}).then(e=>{
                    dispatch(e)
                })
            }}
        />
        <ComeTemplate name="支出" type="outcome" 
            list={outcomedata} 
            addFun={(data) => {
                addOutcome(data).then(e => {
                    dispatch(e)
                })
            }}
            updateFun={(data)=>{
                updateOutcome(data).then((e)=>{
                    dispatch(e)
                })
            }}
            deleteFun={(id) => {
                deleteOutcome({ id: id }).then(e => {
                    dispatch(e)
                })
            }}
        />
    </div>)
}
export default Come;