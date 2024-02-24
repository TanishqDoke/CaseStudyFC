import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          Car Rental
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Cars
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          padding: 1rem 0; /* Add padding */
        }

        .navbar-brand {
          font-size: 1.5rem; /* Increase font size */
        }

        .nav-link {
          font-size: 1.2rem; /* Increase font size */
          margin-right: 1rem; /* Add margin between nav items */
        }

        .nav-link:hover {
          color: #ffffff; /* Change color on hover */
        }

        .navbar-toggler {
          border-color: #ffffff; /* Change border color */
        }

        .navbar-toggler:hover {
          border-color: #ffffff; /* Change border color on hover */
        }

        @media (max-width: 768px) {
          .navbar-nav {
            margin-top: 1rem; /* Add margin on small screens */
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
