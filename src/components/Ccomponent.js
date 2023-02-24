import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import ProNas from './ProNas';
import Kontakt from './Kontakt';
import Otziv from './Otziv';





export default class Ccomponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/'>ProNas</Link>
                            </li>
                            <li>
                                <Link to='/'>Kontakt</Link>
                            </li>
                            <li>
                                <Link to='/'>Otziv</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path='/ProNas'>
                            <ProNas />
                        </Route>
                        <Route path='/Kontakt'>
                            <Kontakt />
                        </Route>
                        <Route path='/Otziv'>
                            <Otziv />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}