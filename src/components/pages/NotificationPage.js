import React from 'react'

class NotificationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.toggleVisibility = this.toggleVisibility.bind(this)

  }

  toggleVisibility() {
    console.log('NotificationPageNotificationPage')
    this.setState({

    })

  }

  render() {
    return (<div>
      <div className="ui inverted vertical left fixed menu" ></div>
    </div>)
  }
}

export default NotificationPage
