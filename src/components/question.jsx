import React, { Component } from 'react'
import Header from '../header'
import HelpBlock from './HelpBlock';
import Footer from '../footer';
import { isPC } from '../config'
class Question extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // title 标题
            // conent: 内容
            // remarks:备注
            list: [{
                title: '如何创建钱包？',
                conent: [
                    '初次登录的用户在创建钱包引导页面，点击“创建钱包”按钮进入“创建EOS账户”页面，按照规范填写“账户名称”、“钱包密码”、“确认密码”后，复制并记录下“公钥信息”',
                    '点击“创建EOS账户”按钮进入下一页面',
                    '在“创建进度”页面点击“下一步”按钮进入资产页面',
                    '添加客服微信号“13501276503”，联系客服人员。提供您的EOS账户名称和钱包公钥信息。',
                    '支付完账户开通费用并向客服提供支付成功截图后，由客服协助您完成EOS账户创建。'
                ]
            }, {
                title: '如何修改钱包密码？',
                conent: [
                    '点击“我的”模块 -“钱包管理”页面，点击具体的钱包名称后点击“修改钱包密码”功能菜单进行修改密码操作。',
                    '接下来需要您输入原先的钱包密码，确认通过后。进入修改密码页面。按照规范输入最新的钱包密码，并重复确认后点击确认即可。'
                ]
            }, {
                title: '如何导出私钥？',
                conent: [
                    '点击“我的”模块-“钱包管理”页面，点击具体的钱包名称后点击“备份钱包”功能菜单',
                    '接下来需要您输入原先的钱包密码，确认通过后，进入导出私钥页面，可以通过复制公钥和私钥信息导出钱包信息。'
                ],
                remarks: ['如果有人获取你的私钥将直接获取您的资产！请抄下私钥并存放在安全的地方']
            }, {
                title: '如何导入钱包？',
                conent: [
                    '导入钱包有两种方式',
                    '方式1：滑动卡片至导入钱包页面。点击卡片中的添加按钮和列表中的导入钱包按钮即可进入“导入钱包”页面。',
                    '方式2：进入“我的”模块-“钱包管理”页面点击右上角“导入”功能即可进入“导入钱包”页面。',
                    '输入钱包的私钥信息，账户名称，钱包密码，重复输入密码，并勾选钱包用户协议后点击完成即可导入成功。'
                ]
            }, {
                title: '什么是币生币功能？',
                conent: [
                    '币生币账户是coinMIX面向客户开放的云端理财产品，T+2计息方式，稳定收益，买到即赚到。',
                    '目前支持EOS理财，后续会支持BTC、ETH等主流币种。'
                ]
            }, {
                title: '如何删除钱包？',
                conent: [
                    '点击“我的”模块-“钱包管理”页面，长按出现底端弹出窗，点击删除即可。'
                ]
            }, {
                title: '什么是划转功能？',
                conent: [
                    '1、划转功能将虚拟货币（EOS）从本地钱包一键划转到币生币账户，轻松体验理财收益。',
                    '2、目前仅支持EOS，后续会陆续支持ETH等主流币种。'
                ]
            }],
            index: 0,
            ispc:isPC()
        }
    }
    listClick(i) {
        this.setState({ index: i })
    }
    componentDidMount(){
        window.onresize = () => {
            this.setState({ispc:isPC()})
        }
    }
    componentWillUnmount() {
        window.onresize =''
    }
    render() {
        let {ispc} = this.state;
        return (
            <div  className={ispc?"":"iphoneStyle"}>
                <Header />
                <div className="qcontent">
                    <div className="qcenter w1200">
                        <div className="ask">
                            <p className="title">被推荐的问题</p>
                            <ul id="list">
                                {this.state.list.map((v, i) => {
                                    return (
                                        <li
                                            onClick={this.listClick.bind(this, i)}
                                            className={i === this.state.index ? "check" : ""}
                                            key={i}
                                        >
                                            <p>{v.title}</p>
                                            <span></span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="answer">
                          <HelpBlock 
                          postList={this.state.list}
                          index={this.state.index}
                          />
                        </div>
                    </div>
                </div>
                <Footer ispc={this.state.ispc}/>
            </div>
        )
    }
}
export default Question