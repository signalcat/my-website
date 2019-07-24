import React, { Component } from 'react';
import Aux from '../Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Toolbar></Toolbar>
                <main>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;