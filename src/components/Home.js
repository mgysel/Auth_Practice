import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Home = () => {
    return (
        <div>
            <Header />
            <p>Learn music from your favorite artists.</p>
            <Link to="/signup" className='ui button'>Sign Up</Link>
            <Link to="/login" className='ui button'>Login</Link>
        </div>
    )
};

export default Home