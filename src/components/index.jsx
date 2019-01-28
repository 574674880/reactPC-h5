import React, { Component } from 'react';
import Header from '../header';
import Canvas from './canvas';
import Footer from '../footer';
import { isPC } from '../config';
class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            offsetheight: document.documentElement.clientHeight,
            fullPage: 0,
            fullPageNum: false,
            offsetwidth: document.documentElement.clientWidth,
        }
    };
    pageInfo(index) {
        this.setState({
            fullPage: index
        });
    }
    scroll(e) {
        e = e || window.event;
        e.preventDefault();
        let { fullPageNum, fullPage } = this.state
        if (fullPageNum) {
            return false;
        }
        if (e.wheelDelta > 0) {
            // 上划
            if (fullPage <= 0) {
                return false;
            }
            this.pageInfo(fullPage - 1);
            setTimeout(() => {
                this.setState({ fullPageNum: false })
            }, 1000)
        } else {
            // 下滑
            if (fullPage >= 4) {
                return false;
            }
            this.setState({ fullPageNum: true });
            this.pageInfo(fullPage + 1);
            setTimeout(() => {
                this.setState({ fullPageNum: false })
            }, 1000)
        }
    }
    widthIphone() {
        if (isPC()) {
            document.onmousewheel = this.scroll.bind(this);
            this.setState({
                offsetheight: document.documentElement.clientHeight,
                offsetwidth: document.documentElement.clientWidth,
            })
        } else {
            document.onmousewheel = ''
            this.setState({
                offsetheight: 'auto',
                offsetwidth: "100%"
            })
        }
    }
    componentDidMount() {
        if (document.addEventListener) {
            document.addEventListener('DOMMouseScroll', this.scroll.bind(this), false)
        }
        setTimeout(function () {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }, 700)
        this.widthIphone()
        window.onresize = () => {
            this.widthIphone()
        }
        document.onkeydown = (event) => {
            var e = event || window.event;
            if (e.keyCode === 33 || e.keyCode === 38) {
                e.wheelDelta = 120
                this.scroll()
            }
            if (e.keyCode === 34 || e.keyCode === 40) {
                e.wheelDelta = -120
                this.scroll()
            }
        }
    }
    componentWillUnmount() {
        document.onmousewheel = ''
        window.onresize = ''
    }
    componentDidUpdate() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    render() {
        let { offsetwidth, offsetheight, fullPage } = this.state;
        let ispc = isPC()
        let sectionStyle = {
            'width': offsetwidth,
            'height': offsetheight,
        }
        let cst = {
            'width':'100%',
            'position':'absolute',
            'left':'50%',
            'bottom':'0.5rem',
            'transform':' translate(-50%, 0)'
   
        }
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        return (
            <div className={"fullpage " + (ispc ? '' : ' iphoneStyle')} style={{ 'transform': 'translate(0,' + (-offsetheight * fullPage) + 'px)' }}>
                <div className='section page1' style={sectionStyle}>
                    <Header />
                    {/* <Canvas></Canvas> */}
                    <canvas width="2560" height="1000" style={cst}></canvas>
                    <p className="backtext">C O I N M I X</p>
                    <div className={"w1200 bannerBox"}>
                        <div>
                            <p>综合管理数字资产</p>
                            <p>全面掌控升值空间</p>
                            <ul>
                                <li>多币种资产，一站式管理</li>
                                <li>多维度交易，全方位升值</li>
                            </ul>
                            <div className="down">
                                <div className="img"></div>
                                <div className="img"></div>
                                <div className="img"></div>
                            </div>
                            <img className="lang" src={require('../img/lang.png')} alt=""></img>
                        </div>
                        <div>
                            <img className="iphone" src={require('../img/iphone.png')} alt="" ></img>
                        </div>
                    </div>
                </div>
                {/* 第二页 */}
                <div className="section" style={sectionStyle}>
                    <div className={"w1200 pag2"}>
                        <div><img className="img1" src={require("../img/1.png")} alt="" /></div>
                        <div>
                            <p>S A F E T Y</p>
                            <h1><span>多链钱包</span><span>安全可靠</span></h1>
                            <p>多重安全验证，安全高效</p>
                            <p>支持BTC, ETH, EOS等多币种，且持续增长中</p>
                        </div>
                    </div>
                </div>
                {/* 第三页 */}
                <div className="section" style={sectionStyle}>
                    <div className={"w1200 pag2 reverse"}>
                        <div><img className="img2" src={require("../img/2.png")} alt="" /></div>
                        <div>
                            <p>E A R N I N G S</p>
                            <h1><span>闲币理财</span><span>日日进账</span></h1>
                            <p>币本位收益，让您的闲钱“聪明”起来</p>
                            <p> </p>
                        </div>
                    </div>
                </div>
                {/* 第四页 */}
                <div className="section" style={sectionStyle}>
                    <div className="w1200 w1200i pag2">
                        <div><img className="img3" src={require("../img/3.png")} alt="" /></div>
                        <div>
                            <p>R A P I D</p>
                            <h1><span>差价交易</span><span>快速稳赚</span></h1>
                            <p>一站式交易HUB，支持多家交易所</p>
                            <p>一键委托交易，差价套利及时高效</p>
                        </div>
                    </div>
                </div>
                {/* 第5页 */}
                <div className="section" style={sectionStyle}>
                    <div className="w1200 w1200i pag2 reverse">
                        <div><img className="img4" src={require("../img/4.png")} alt="" /></div>
                        <div>
                            <p className="lastp">E C O L O G I C A L</p>
                            <h1><span>DApp生态</span><span>无缝链接</span></h1>
                            <p>友好的浏览环境，构建DAPP体验生态</p>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}
export default Index