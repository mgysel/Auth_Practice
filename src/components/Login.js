import React from "react";
import Header from "./Header";
import axios from "axios";
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { store } from 'react-notifications-component';

class Login extends React.Component {
    state = { email: "", password: "" }

    onFormSubmit = (event) => {
        // This is where use Flask route
        console.log(this.state);

        // Prevents refreshing the page
        event.preventDefault();

        const email = this.state.email;
        const password = this.state.password;
        axios.post("/login", {email, password})
            .then((response) => {
                console.log(response.data);
                // Update state
                this.setState({
                    email: response.data.email,
                    password: response.data.password
                });
                this.props.history.push('/');
            })
            .catch((err) => {
                console.log(err);
                store.addNotification({
                    title: "Error",
                    message: "Incorrent email or password.",
                    type: "danger",
                    insert: "top",
                    container: "center",
                    dismiss: {
                      duration: 1200,
                      onScreen: true
                    }
                  });
            });
    }

    render() {
        return (
            <div className="ui segment">
                <ReactNotification />
                <Header />
                <form onSubmit={this.onFormSubmit} className="ui fluid form" method="post">
                    <input 
                        className="field"
                        type="email"
                        placeholder="Email" 
                        name="email"
                        value={this.state.email} 
                        onChange={(e) => this.setState({ email: e.target.value })} 
                        
                    />
                    <input 
                        className="field"
                        type="password"
                        placeholder="Password" 
                        name="password" 
                        onChange={(e) => this.setState({ password: e.target.value })} 
                        value={this.state.password} 
                        
                    />
                    <button className="ui button">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;