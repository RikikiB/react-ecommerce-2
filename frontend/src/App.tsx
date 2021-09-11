import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import TermsAndConditions from './components/TermsAndConditions'
import Header from './components/Header'
import Cart from './components/Cart'
function App() {
  return (
    <Router>
      <div className='App'>
        <div className='container'>
          <Header />
          <div className='main'>
            <div>
              <Switch>
              <Route path='/cart'>
                  <Cart />
                </Route>
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
