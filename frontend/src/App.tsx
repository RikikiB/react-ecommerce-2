import "./App.scss"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import TermsAndConditions from "./components/TermsAndConditions"
function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <div className="header">
            {" "}
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/TermsAndConditions">Terms and Conditions</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="main">
            <div>
              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/TermsAndConditions">
                  <TermsAndConditions />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </div>
          <div className="footer"></div>
        </div>
      </div>
    </Router>
  )
}
function Home() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>
}

function Users() {
  return <h2>Users</h2>
}
export default App
