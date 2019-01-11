import React, { Component } from 'react'
import { isPC } from './config'
class Footer extends Component {
    constructor(porps) {
        super(porps)
        this.state = {
            hei: 'auto',
            whei: 1
        }
    }
    componentDidMount() {
        let _this = this
        setTimeout(function () {
            let hei = window.innerHeight;
            let bhei = window.document.documentElement.lastElementChild.offsetHeight
            _this.setState({
                hei: bhei,
                whei: hei
            })
        })
    }
    render() {
        let {hei,whei}=this.state
        let style={}
        if(hei<whei){
            style={
                'position':'absolute'
            }
        }
        return (
            <div className={"fonter" + (isPC() ? "" : ' fonterIs')} style={style}>
                <div className="w1200 fonterBox">
                    <p> 服务条款 @CoinMix 版权所有</p>
                    <div>
                        <a href="javascript:;"></a>
                        <a href="javascript:;"></a>
                        <a href="javascript:;"></a>
                        <a href="javascript:;"></a>
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer