import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import TermsAndConditions from './components/TermsAndConditions'
function App() {
  return (
    <Router>
      <div className='App'>
        <div className='container'>
          <div className='header'>
            {' '}
            <nav>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
                <li>
                  <Link to='/TermsAndConditions'>
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className='main'>
            <div>
              <Switch>
                <Route path='/TermsAndConditions'>
                  <TermsAndConditions />
                </Route>
                <Route path='/'>
                  <Shop />
                </Route>
              </Switch>
            </div>
          </div>
          <div className='footer'></div>
        </div>
      </div>
    </Router>
  )
}
function Shop() {
  return <h2>Shop</h2>
}

export default App
