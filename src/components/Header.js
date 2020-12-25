import React from 'react'

export const Header = () => {
    return (
        <nav className="navbar navbar-dark bg-dark justify-content-between">
            <span style={logoColor} className="my-2 mx-4">LOGO</span>
            <form className="form-inline my-2 mx-4 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    )
}

const logoColor = {
    color: 'white'
}
