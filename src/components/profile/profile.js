import React from 'react'
import NotifyLogo from '../../assets/images/profile.jpeg'
import '../../assets/css/profile.css'
class Profile extends React.Component {
  render() {
    return (<div>
      <img src={NotifyLogo} className = 'profile-page-profile-pic centre' />
      <hr></hr>
    </div>)
  }
}

export default Profile;
