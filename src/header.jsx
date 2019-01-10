import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ANDROID_DOWNLOAD, IOS_DOWNLOAD, isPC } from './config'
class Header extends Component {
    constructor(porps) {
        super(porps)
        this.state = {
            isactive: false
        }
    }
    download(e) {//下载
        e.preventDefault()
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        if (isAndroid) {
            window.location.href = ANDROID_DOWNLOAD
        }
        if (isiOS) {
            window.location.href = IOS_DOWNLOAD
        }
        if (isPC()) {
            this.setState({
                isactive: !this.state.isactive
            })
        }
    }
    render() {
        let href = window.location.href;
        let index = 0;
        let { isactive } = this.state
        if (href.indexOf('question') >= 0) {
            index = 1
        }
        if (href.indexOf('contact') >= 0) {
            index = 2
        }
        if (href.indexOf('feedback') >= 0) {
            index = 3
        }
        return (
            <div className={"nav enav" + (isPC() ? "" : " navIs")}>
                <div className="w1200 navAuto">
                    <Link className='logo' to='/'></Link>
                    <div id="nav">
                        <a id="down" className={isactive ? "navdown" : ""} onClick={this.download.bind(this)} href="/">产品下载</a>
                        <Link className={index === 1 ? 'active' : ''} to='/question'>常见问题</Link>
                        <Link className={index === 2 ? 'active' : ''} to='/contact'>联系我们</Link>
                        <Link className={index === 3 ? 'active' : ''} to='/feedback'>意见反馈</Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header