import React, { Component } from 'react'
import Header from '../header';
import Footer from '../footer';
import axios from 'axios';
import { isPC } from '../config'
class Feedback extends Component {
    constructor(porps) {
        super(porps)
        this.state = {
            valleng: 300,
            val: '',
            type: 2,
            tel: ''
        }
    }
    changeArea(event) {
        let leng = event.target.value
        if (leng.length < 300) {
            this.setState({
                valleng: 300 - leng.length,
                val: leng
            })
        } else {
            this.setState({
                valleng: 0
            })
        }
    }
    redio(e) {
        this.setState({
            type: e.target.value
        })
    }
    telhand(e) {
        this.setState({
            tel: e.target.value
        })
    }
    commit() {
        let { tel, type, val } = this.state;
        let _this = this
        axios({
            method: 'post',
            url: 'https://www.coinmix.im/wallet/my/add_pc_feedback',
            data: {
                'type': type,
                'content': val,
                'phone': tel
            },
            // dataType:'json',
            contentType: 'application/json',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (res) {
            _this.setState({
                val: '',
                tel: ''
            })
            if (res.data.msg == '成功') {
                alert('提交成功，谢谢反馈')
            } else {
                alert(res.data.msg)
            }
        }).catch(function(res){
            if(res.data){

                alert(res.data.msg)
            }else{
                alert(res.msg)
            }
        })
    }
    render() {
        return (
            <div className={isPC() ? "" : "iphoneStyle"}>
                <Header />
                <div className="feedback">
                    <div className="speek">
                        <div className="talkback w1200">
                            <div className="ftype">
                                <div className="title">反馈类型</div>
                                <div className="lei">
                                    <label htmlFor="gn">
                                        <input
                                            name="term" type="radio"
                                            value="1" id="gn"
                                            onChange={this.redio.bind(this)}
                                        />
                                        <span>功能建议</span></label>
                                    <label htmlFor="ty">
                                        <input
                                            name="term"
                                            type="radio"
                                            value="2"
                                            id="ty"
                                            onChange={this.redio.bind(this)}
                                            defaultChecked={true}
                                        /><span>体验建议</span> </label>
                                    <label htmlFor="nr">
                                        <input onChange={this.redio.bind(this)} name="term" type="radio" value="3" id="nr" /><span>内容建议</span>
                                    </label>
                                    <label htmlFor="qt">
                                        <input onChange={this.redio.bind(this)} name="term" type="radio" value="4" id="qt" /><span>其他</span>
                                    </label>
                                </div>
                            </div>
                            <div className="fcontent">
                                <p className="title">反馈内容</p>
                                <textarea
                                    name="" id="text" cols="30" rows="10"
                                    onChange={this.changeArea.bind(this)}
                                    placeholder="请输入您的反馈意见"
                                    value={this.state.val}
                                ></textarea>
                            </div>
                            <p className="maxword w1200">最多{this.state.valleng}字</p>
                            <div className="phone">
                                <p className="title">联系方式</p>
                                <input
                                    id="phone" type="tel" placeholder="请您输入您的手机号"
                                    maxLength="11"
                                    value={this.state.tel}
                                    onChange={this.telhand.bind(this)}
                                />
                            </div>
                            <div className="commit" onClick={this.commit.bind(this)} id="commit">提交</div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Feedback