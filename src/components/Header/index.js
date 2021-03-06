import React,{ Component } from 'react';
import { Row, Col } from 'antd';
import './index.less'
import util from '../../util'
export default class Header extends Component{
    state = {}
        componentWillMount(){
        this.setState({
            userName:"河畔一角"
        })
        setInterval(() => {
        var sysTime = util.formateDate(new Date().getTime());
        this.setState({
            sysTime:sysTime
        })
        }, 1000);
    }
    render(){
        return(
            <div className="header">
                <Row className="header-top">
                    <Col span="24">
                        <span>欢迎，{this.state.userName}</span>
                        <span>退出</span>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span="20" className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-detail">晴转多云</span>
                    </Col>
                </Row>
            </div>
        )
    }
}