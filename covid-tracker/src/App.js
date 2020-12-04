import logo from './covid-logo.png';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Global, Indo, Province } from './pages';

// function App() {
//   return (
    
//         <table>
//           <td>
//           <a
//             className="App-link"
//             href="/covid-tracker/src/Global.js"
//             rel="noopener noreferrer"
//           >
//             Global
//           </a>
//           </td>
//           <td>
//           <a
//             className="App-link"
//             href="/covid-tracker/src/Indo.js"
//             rel="noopener noreferrer"
//           >
//             Indonesia
//           </a>
//           </td>
//           <td>
//           <a
//             className="App-link"
//             href="/covid-tracker/src/Province.js"
//             rel="noopener noreferrer"
//           >
//             Per Province
//           </a>
//           </td>
//         </table>
      
//   );
// }

const App = () =>{
  return (
    <div className="App">
      <header className="App-header">
        <h1>Covid Tracker</h1>
        <img src={logo} className="App-logo" alt="logo" />
      <Router>
          <div>
              <nav>
                  <ul>
                      <li>
                          <Link to="/global">
                              Global
                          </Link>
                      </li>
                      <li>
                          <Link to="/indo">
                              Indonesia
                          </Link>
                      </li>
                      <li>
                          <Link to="/province">
                              Province
                          </Link>
                      </li>
                  </ul>
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