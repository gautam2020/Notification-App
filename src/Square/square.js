import React from 'react';
import ReactDOM from 'react-dom';
import './square.css'
class Square extends React.Component{
 func(name){
   console.log(name)
 }
  render(){
    return (
      <button className="square" onClick={()=>this.props.onClick()}>
        {this.props.value}
      </button>
    )
  }
}
export default Square
