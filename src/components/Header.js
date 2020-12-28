import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Header = () => {

    const [cityName, setCity] = useState('');

    const {addCity} = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        addCity(cityName);
        setCity('');
    }

    return (
        <nav className="navbar navbar-dark bg-dark justify-content-between" onSubmit={onSubmit}>
            <span style={logoColor} className="my-2 mx-4">LOGO</span>
            <form className="form-inline my-2 mx-4 my-lg-0">
                <input className="form-control mr-sm-2" type="search"placeholder="Search" aria-label="Search" 
                value={cityName} 
                onChange={ (e)=> setCity(e.target.value)} 
                />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    )
}

const logoColor = {
    color: 'white'
}
