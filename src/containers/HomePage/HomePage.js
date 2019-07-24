import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import catPic from '../../assets/images/cat.jpeg';

export class HomePage extends Component {

    render() {
        return (
            <Aux>
                <img src={catPic} alt="cat"></img>
                <h1>This cat is so cute!</h1> 
            </Aux>
        );
    }
}

export default HomePage;