import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

function Header() {
  return (
    <div className='Header' data-testid='Header'>
      <h3>XYZ CORPORATION</h3>
      <button type='button' onClick={() => {}}>
        {' '}
        Cart
        <FontAwesomeIcon icon={faCartPlus} />
      </button>
    </div>
  )
}

export default Header
