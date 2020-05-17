import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class UserPage extends React.Component {
    // NEED TO GET THE EMAIL AND PASSWORD STATE
    state = { email: "", password: "" }

    render() {
        return (
            <div className="ui segment">
                <Header />
        <p>Hello {email} and {password}</p>
            </div>
        );
    }
}

export default UserPage;