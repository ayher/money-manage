import React, { useState, useEffect } from 'react';
import { css } from 'emotion'
import { Modal, Button, Input } from 'antd';
import { useMappedState, useDispatch } from 'redux-react-hook';
import {
    getAssets,
    addAssets,
    deleteAssets,
    getLiabililies,
    addLiabililies,
    deleteLiabililies,
    updateAssets,
    updateLiabililies
} from '../redux/action/balance'

const typeadd = '添加', typeupdate = '修改'
// props={name,list,addFun,deleteFun,updateFun}
const BalanceTemplate = props => {
    let [modalVisible, setModalVisible] = useState(false)
    let [modalType, setModalType] = useState('')
    let [modalInputValue, setModalInputValue] = useState({ type: '', money: 0 })
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
                            () => {
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
                                    {value.price}
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
                            () => {
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
                                money: modalInputValue.money,
                                price:modalInputValue.price,
                                remark:modalInputValue.remark
                            });
                            else props.updateFun({ 
                                id: modalInputValue.id, 
                                money: modalInputValue.money,
                                price: modalInputValue.price,
                                remark: modalInputValue.remark
                            });
                            setModalVisible(false)
                        }}>
                        确定
                    </Button>,
                ]}
            >
                <p ><span>{props.modalFro}来源：</span><Input value={modalInputValue.type}
                    onChange={(e) => {
                        let value = e.target.value
                        setModalInputValue(v => ({ ...v, type: value }))
                    }} /></p>
                <p ><span>{props.modalFro}现金流：</span><Input value={modalInputValue.money}
                    onChange={(e) => {
                        let value = e.target.value
                        setModalInputValue(v => ({ ...v, money: value }))
                    }} /></p>
                <p ><span>{props.modalFro}总价值：</span><Input value={modalInputValue.price}
                    onChange={(e) => {
                        let value = e.target.value
                        setModalInputValue(v => ({ ...v, price: value }))
                    }} /></p>
                <p ><span>{props.modalFro}备注：</span><Input value={modalInputValue.remark}
                    onChange={(e) => {
                        let value = e.target.value
                        setModalInputValue(v => ({ ...v, remark: value }))
                    }} /></p>
            </Modal>
        </>
    )
}

const Balance = props => {
    const dispatch = useDispatch()
    const assetsdata = useMappedState(state => state.balance.assets || [])
    const liabililiesdata = useMappedState(state => state.balance.liabililies || [])
    useEffect(() => {
        getAssets().then(e => {
            dispatch(e)
        })
        getLiabililies().then(e => {
            dispatch(e)
        })
    }, [])
    return (<div className={css`height:100%;width:100%`}>
        <BalanceTemplate name="资产" type="assets"
            list={assetsdata}
            addFun={(data) => {
                addAssets(data).then(e => {
                    dispatch(e)
                })
            }}
            updateFun={(data) => {
                updateAssets(data).then((e) => {
                    dispatch(e)
                })
            }}
            deleteFun={(id) => {
                deleteAssets({ id: id }).then(e => {
                    dispatch(e)
                })
            }}
        />
        <BalanceTemplate name="负债" type="liabililies"
            list={liabililiesdata}
            addFun={(data) => {
                addLiabililies(data).then(e => {
                    dispatch(e)
                })
            }}
            updateFun={(data) => {
                updateLiabililies(data).then((e) => {
                    dispatch(e)
                })
            }}
            deleteFun={(id) => {
                deleteLiabililies({ id: id }).then(e => {
                    dispatch(e)
                })
            }}
        />
    </div>)
}
export default Balance;