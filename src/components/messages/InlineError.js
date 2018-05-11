import React from 'react'

class InlineError extends React.Component{
  render(){
    return (
      <span className = 'error'>{this.props.value}</span>
    );
  }
}
export default InlineError
