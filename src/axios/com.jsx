import React, { Component } from 'react'
import ReactDOM from 'react-dom';
class Config extends Component {
    constructor(porps) {
        super(porps)
        this.state = {}
    }
    isPC = () => {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
            "SymbianOS", "Windows Phone",
            "iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }
    render() {
        return (
            <div></div>
        )
    }
}
let div = document.createElement('div');
let props = {
   
};
document.body.appendChild(div);
 
let Box = ReactDOM.render(React.createElement(
  Config,
  props
),div);
export default Box;