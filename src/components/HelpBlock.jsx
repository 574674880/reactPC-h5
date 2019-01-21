import React, { Component } from 'react'
class HelpBlock extends Component {
    constructor(porps) {
        super(porps)
        this.state = {

        }
    }
    componentDidMount() { }
    render() {
        let active = this.props.index,
            postList = this.props.postList[active]
        let ifremarks
        if(postList.remarks){
            for(let i = 0 ; i <postList.remarks.length ;i++){
                ifremarks = (
                    <div key={i} className="note">
                        <p className="ora">● 备注：</p>
                        <p>{postList.remarks[i]}</p>
                    </div>
                )
            }
        }
        return (
            <div className="answerword">
                <p className="title">{postList.title}</p>
                <span className="xian"></span>
                <div className="neirong">
                    {postList.conent.map((v, i) => {
                        return (
                            <p key={i}>{v}</p>
                        )
                    })}
                    {ifremarks}
                </div>
            </div>
        )
    }
}
export default HelpBlock