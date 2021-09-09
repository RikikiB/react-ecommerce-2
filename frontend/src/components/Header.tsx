import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='Header' data-testid='Header'>
      <h3>XYZ CORPORATION</h3>{' '}
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/TermsAndConditions'>Terms and Conditions</Link>
          </li>
        </ul>
      </nav>
      <button type='button' onClick={() => {}}>
        {' '}
        Cart
        <FontAwesomeIcon icon={faCartPlus} />
      </button>
    </div>
  )
}

export default Header
