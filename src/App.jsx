import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import SearchUsers from './components/users/SearchUsers';
import RecentSearches from './components/users/RecentSearches';
import Favorites from './components/users/Favorites';


function App() {

  return (
    <React.Fragment>
      <div className="App">

        <nav
          className="navbar navbar-expand-md header-background justify-content-center d-grid"
          aria-label="navbar"
        >
          <div className="container">
            <a className="navbar-brand" href="https://www.torre.ai">
              <img
                src="data:image/webp;base64,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"
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="Torre logo"
              />
            </a>

            <div className="collapse navbar-collapse" id="navbarsExample04">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <Link
                    to="/searchUsers"

                    className="nav-link px-2 text-white link-button"
                  >
                    Go to search
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/recentSearches"

                    className="nav-link px-2 text-white link-button"
                  >
                    Recent searches
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/favorites"

                    className="nav-link px-2 text-white link-button"
                  >
                    Favorites
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/searchUsers" element={<SearchUsers />} />
          <Route path="/recentSearches" element={<RecentSearches />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
