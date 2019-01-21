import React, { Component } from 'react'
import Header from '../header'
import Footer from '../footer';
import { isPC } from '../config'
class Contact extends Component {
    constructor(porps) {
        super(porps)
        this.state ={
            ispc:isPC()
        }
    }
    componentDidMount(){
        window.onresize = () => {
            this.setState({ispc:isPC()})
        }
    }
    componentWillUnmount() {
        window.onresize = ''
    }
    render() {
        let {ispc} = this.state;
        return (
            <div className={ispc?"":"iphoneStyle"}>
                <Header />
                <div className='contact'>
                <div className="w1200">
                    <h1>联系我们</h1>
                    <div className="mapBox">
                        <div className="dn" id="map"></div>
                        <div>
                            <h2>北京科达众连区块链技术有限公司</h2>
                            {/* <p>地址：北京市朝阳区四惠桥南侧甲一号伊莎文化中心</p> */}
                            <p>战略合作：coinmix@126.com</p>
                            <p>商务洽谈：微信号 wangningwxh</p>
                            {/* <p>原创投稿：微信号 tong19860208</p> */}
                        </div>
                    </div>
                    <h1>关于我们</h1>
                    <p>【coinMIX】 为用户提供全球资讯与快讯、行业数据、社群服务、资产管理和数字投行等一站式服务，并结合基于区块链加密存储技术的特有奖励体系，立志和区块链人群、行业领袖、项目机构共同创造区块链价值的生态圈。</p>
                    <p>【coinMIX】是一款简单易用的数字资产智能手机钱包，支持多链、多币种管理与交易，为用户提供贴心的去中心化数字资产管理，同时帮助用户进行最大化数字资产投资理财。</p>
                    <p>结合四大核心诉求，为用户提供一站式数字资产服务：</p>
                    <p>> 用多链钱包进行安全存储</p>
                    <p>> 让闲置货币自动理财</p>
                    <p>> 在交易所间赚取差价</p>
                    <p>> 构建无缝的DApp生态 </p>
                </div>
                </div>
                <Footer ispc={this.state.ispc}/>
            </div>
        )
    }
}
export default Contact