import React from 'react'
import InlineErrorCss from './InlineError.css'

class InlineError extends React.Component{
  render(){
    return (
      <span className = 'error'>{this.props.value}</span>
    );
  }
}
export default InlineError
