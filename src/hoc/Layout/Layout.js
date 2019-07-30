import React, { Component } from 'react';
import Aux from '../Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css'

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Toolbar></Toolbar>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;