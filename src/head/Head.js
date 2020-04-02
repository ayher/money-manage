import React from 'react';
import './head.css'
import {  Modal } from 'antd';
import { QqOutlined, WechatOutlined, AlipayCircleOutlined} from '@ant-design/icons';
import QQ from '../image/qq.jpg'
class Head extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loginVisible:false,
        }
    }
    showLoginModal=()=>{
        this.setState({
            loginVisible:true
        })
    }
    loginVisibleHandleOk=()=>{

    }
    loginVisiblehandleCancel=()=>{
        this.setState({
            loginVisible: false
        })
    }
    render(){
        return(
            <>
                <div className="head">
                    <span>数据统计</span>
                    <span>{this.props.title}</span>
                    <span onClick={this.showLoginModal}>登录</span>
                </div>
                <Modal
                    title="登录"
                    visible={this.state.loginVisible}
                    onOk={this.loginVisibleHandleOk}
                    onCancel={this.loginVisiblehandleCancel}
                >
                    <div className="otherLogin">
                        <QqOutlined style={{fontSize:"40px",flex:1}}/>
                        <WechatOutlined style={{ fontSize: "40px", flex: 1 }} />
                        <AlipayCircleOutlined style={{ fontSize: "40px", flex: 1 }}/>
                    </div>
                </Modal>
            </>
        )
    }
}
export default Head;