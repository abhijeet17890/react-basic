import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './components/home/Home';
import Signup from './components/signup/Signup';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/signup' component={Signup} />
                </div>
            </Router>
        );
    }
}

export default App;
