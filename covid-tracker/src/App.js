import logo from './covid-logo.png';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Global, Indo, Province } from './pages';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Covid Tracker</h1>
        <img src={logo} className="App-logo" alt="logo" />
      <Router>
          <div>
              <nav>
                  <div>
                    <table>
                        <td>
                            <Link to="/global">
                                <h4>Global</h4>
                            </Link>
                        </td>
                        <td>
                            <Link to="/indo">
                                <h4>Indonesia</h4>
                            </Link>
                        </td>
                        <td>
                            <Link to="/province">
                                <h4>Province</h4>
                            </Link>
                        </td>
                    </table>
                   </div>
              </nav>
          </div>
          <Switch>
              <Route path="/global">
                  <Global />
              </Route>
              <Route path="/indo">
                  <Indo />
              </Route>
              <Route path="/province">
                  <Province />
              </Route>
          </Switch>
      </Router>
      </header>
    </div>
  )
}

export default App;