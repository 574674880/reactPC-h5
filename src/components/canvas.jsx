import React,{Component} from 'react'
class Canvas extends Component{
 constructor(porps){
    super(porps)
    this.state = {

    }
 }

 componentDidMount(){
    // this.fun(webpackUniversalModuleDefinition)
 }
 render(){
     let cst = {
         'min-width':'1000px',
         'width':'100%',
         'position':'fixed',
         'left':'50%',
         'top':'50%',
         'transform':' translate(-50%, -50%)'

     }
return(
    <canvas width="2560" height="1000" style={cst}></canvas>
)
 }
}
export default Canvas