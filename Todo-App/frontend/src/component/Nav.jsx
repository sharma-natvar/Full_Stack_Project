import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate()
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container ">
          <a className="navbar-brand" href="/home">
            <h1 className="fs-4">TODO-App</h1>
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/todo">
                  Todo
                </Link>
              </li>
            </ul>
            <div>
              <h4 className="btn btn-outline-danger m-0" onClick={()=>{navigate('/'); sessionStorage.removeItem('id')}}>LogOut</h4>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
