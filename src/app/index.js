import React from 'react';
import App from './app.jsx';
import { Provider } from 'react-redux';
import store from './../store'
import { HashRouter as Router} from 'react-router-dom';
import styles from '../sass/main.scss'

export default class Main extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Router>
                        <header className="header">Main Header</header>
                            <section className="body"> 
                                <App></App>
                            </section>
                        <footer className="header">Main Footer</footer>
                    </Router>
                </Provider>
            </div>
        )
    }
}