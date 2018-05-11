import React from 'react'
import Items from '../menuItems/Items'
import Profile from '../profile/profile'

import '../../assets/css/notification.css'

import NotifyLogo from '../../assets/images/profile.jpeg'

class NotificationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.toggleVisibility = this.toggleVisibility.bind(this)
  }
  renderMenuItems(menuItem) {
    console.log(menuItem)
    return <Items name={menuItem}/>

  }
  renderProfileComponent() {
    return <Profile/>
  }
  toggleVisibility() {
    console.log('NotificationPageNotificationPage')
    this.setState({})
  }
  render() {
    return (<div>
      <div className='notification-page-top-band'>
        <div className='notification-page-title'>
          NOTIFY ME ;)
        </div>
      </div>
      <div className="ui inverted vertical left fixed menu" id="notification-page-sidebar">
        <div className='menu-sidebar'>
          {this.renderProfileComponent()}
          {this.renderMenuItems('add-task')}
          {this.renderMenuItems('set-reminders')}
          {this.renderMenuItems('view-notifications')}
        </div>
      </div>

    </div>);
  }
}

export default NotificationPage
