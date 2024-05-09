import Cookies from 'js-cookie'

import Header from '../Header'
import SocialMedia from '../SocialMedia'

import './index.css'

const Account = props => {
  const username = localStorage.getItem('username')
  const password = localStorage.getItem('password')
  const passwordAsterisk = '*'.repeat(password.length)

  const onClickToLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="account-main-bg-container">
      <Header />
      <div className="account-container">
        <h1 className="account-heading">Account</h1>
        <hr className="horizontal-line" />
        <div className="membership-container">
          <p className="membership-para">Member ship</p>
          <p className="login-user-name">{username}@gmail.com</p>
        </div>
        <div className="password-container">
          <p className="password">Password :{passwordAsterisk}</p>
        </div>
        <hr className="horizontal-line" />
        <div className="plan-details-container">
          <p className="plan-details">Plan details</p>
          <p className="Premium">Premium</p>
          <p className="ultra-hd">Ultra HD</p>
        </div>
        <hr className="horizontal-line" />
        <button
          className="log-out-button"
          type="button"
          onClick={onClickToLogout}
        >
          Logout
        </button>
      </div>
      <SocialMedia />
    </div>
  )
}

export default Account
