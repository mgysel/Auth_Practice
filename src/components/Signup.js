import React from "react";
import Header from "./Header";
import axios from "axios";

class Signup extends React.Component {
    state = { username: "", email: "", password: "" }

    onFormSubmit = (event) => {
        // Prevents refreshing the page
        event.preventDefault();

        const username = this.state["username"];
        const email = this.state["email"];
        const password = this.state["password"];
        axios.post("/signup", { username, email, password })
            .then((response) => {
                console.log(response);
            })
    }

    render() {
        return (
            <div className="ui segment">
                <Header />
                <form onSubmit={this.onFormSubmit} className="ui fluid form" method="post">
                    <input 
                        className="field" 
                        type="text" 
                        placeholder="Username" 
                        name="email" 
                        value={this.state.username} 
                        onChange={(e) => this.setState({ username: e.target.value })} 
                        
                    />
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
                    <button className="ui button">Signup</button>
                </form>
            </div>
        );
    }
}

export default Signup