import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-brand btn btn-link text-warning" ><img width={70} src={process.env.PUBLIC_URL +"/RipTide_logo2.png"} alt="Rip Tide Martial Arts" /></button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <NavLink to="/" className="nav-link active btn btn-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/Classes" className="nav-link active btn btn-link">Classes</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Ranks" className="nav-link active btn btn-link">Ranks</NavLink>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link active btn btn-link" >About</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;