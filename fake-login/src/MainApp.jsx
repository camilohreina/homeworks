import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import './Styles/styles.css';

export const MainApp = () => {
    return (
        <>
            <h1 className='Title'> Challenge 11 </h1>
            <hr />

            <nav className="nav">
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/about" activeClassName="active">About</NavLink>
                <NavLink to="/login" activeClassName="active">Login</NavLink>
            </nav>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </>
    );
}