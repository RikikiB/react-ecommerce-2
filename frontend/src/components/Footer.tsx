import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      {' '}
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#74b4d4'
          fill-opacity='1'
          d='M0,96L48,96C96,96,192,96,288,96C384,96,480,96,576,117.3C672,139,768,181,864,186.7C960,192,1056,160,1152,149.3C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg>
      <Link to='/'>Home</Link>
      <Link to='/cart'>Cart</Link>
      <Link to='/about'>About The Creators</Link>
      <h4> 2021 Punchcode team, all rights reserved</h4>
    </div>
  )
}
export default Footer
