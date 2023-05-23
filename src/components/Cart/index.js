import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import './index.css'

const Cart = props => {
  const {history} = props
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    history.replace('/login')
  }
  return (
    <>
      <Header />
      <div className="products-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
          className="products-image"
        />
      </div>
    </>
  )
}
export default withRouter(Cart)
