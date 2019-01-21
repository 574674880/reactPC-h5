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
        let { hei, whei } = this.state
        let { ispc } = this.props
        let ifprops = ispc?ispc:isPC()
        let style = {}
        if (hei < whei) {
            style = {
                'position': 'absolute'
            }
        } else {
            style = {
                'position': 'static'
            }
        }
        return (
            <div className={"fonter" + (ifprops ? "" : ' fonterIs')} style={style}>
                <div className="w1200 fonterBox">
                    <p> 服务条款 @CoinMix 版权所有</p>
                    <dl>
                        <dd></dd>
                        <dd></dd>
                        <dd></dd>
                        <dd></dd>
                        <dd></dd>
                    </dl>
                </div>
            </div>
        )
    }
}
export default Footer