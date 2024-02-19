import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom';
import './App.css';
import Items from './components/Items';
import PhotoContextProvider from './contextProvider/PhotoContext';

function App () {
  return (
    <PhotoContextProvider>
      <div className="App">
        <Router>
          <header className="App-header">
            <NavLink to="/" className="header">Photo sharing app</NavLink>
            <nav>
              <ul className="nav-container">
                <li>
                  <NavLink to="/mountain">Mountain</NavLink>
                </li>
                <li>
                  <NavLink to="/football">Football</NavLink>
                </li>
                <li>
                  <NavLink to="/basketball">Basketball</NavLink>
                </li>
                <li>
                  <NavLink to="/tennis">Tennis</NavLink>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path="/mountain" element={<Items searchTerm="mountain"/>} />
              <Route path="/football" element={<Items searchTerm="football"/>} />
              <Route path="/basketball" element={<Items searchTerm="basketball"/>} />
              <Route path="/tennis" element={<Items searchTerm="tennis"/>} />
            </Routes>
          </header>
        </Router>
        <body className="App-body" />
      </div>
    </PhotoContextProvider>
  );
}

export default App;
