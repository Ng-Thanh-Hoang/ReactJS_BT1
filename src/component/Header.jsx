import React from 'react'

const Header = () => {
    return (
        <div className='header bg-dark'>
            <div className="container px-0">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid px-0">
                        <a className="navbar-brand text-white " href="#">Start Bootstrap
                        </a>
                        <button className="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon bg-secondary" />
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active text-white fw-semibold" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-secondary fw-bolder" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light-emphasis fw-bolder" href="#">Contact</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Home</a></li>
                                        <li><a className="dropdown-item" href="#">About</a></li>
                                        <li><a className="dropdown-item" href="#">Contact</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                </nav>
            </div>
        </div >
    )
}

export default Header