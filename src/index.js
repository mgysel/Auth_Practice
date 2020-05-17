import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';

const HomePage = () => {
    return <Home />
}

class App extends React.Component {
    render () {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/signup" exact component={Signup} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);