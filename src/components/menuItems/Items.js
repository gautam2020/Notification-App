import React from 'react'
import '../../assets/css/items.css'

class Items extends React.Component {
  setIcon() {
    switch (this.props.name) {
      case 'add-task':
        return "plus icon";
      case 'set-reminders':
        return "stopwatch icon";
      case 'view-notifications':
        return "calendar alternate outline icon";
      default:
        return '';
    }
  }

  setText() {
    switch (this.props.name) {
      case 'add-task':
        return "Add Task";
      case 'set-reminders':
        return "Set Reminders";
      case 'view-notifications':
        return "View Notifications";
      default:
        return '';
    }
  }

  render() {
    const name = this.props.name
    return (<div >
      <div>
      <i className={this.setIcon()} id = "items-sidebar-icon"></i>
     </div>
     <div id = {`items-sidebar-text-${name}`}>
      {this.setText()}
    </div>
      <hr></hr>
    </div>)

  }
}

export default Items
