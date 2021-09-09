import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

function Header() {
  return (
    <div className='Header'>
      XYZ CORPORATION
      <div>
        <button type='button' onClick={() => {}}>
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
      </div>
    </div>
  )
}

export default Header
