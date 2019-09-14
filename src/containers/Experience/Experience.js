import React, { Component } from 'react';
import classes from "./Experience.module.css";
import burgerBuilderGif from '../../assets/images/burgerBuilder.gif';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

export class Experience extends Component {
    
    render() {
        return (
            <div className={classes.Experience}>
                <Toolbar></Toolbar>
                <div className={classes.AppContainer}>
                    <img src={burgerBuilderGif} alt="burgerBuilderGif" className={classes.AppImage}></img>
                    <div className={classes.listContainer}>
                        <header className={classes.appTitle}>Burger Builder</header>
                        <ul className={classes.list}>
                            <li className={classes.listItem}>FeatureFeatureFeatureFeatureFeatureFeatureFeature</li>
                            <li className={classes.listItem}>FeatureFeatureFeatureFeatureFeature</li>
                            <li className={classes.listItem}>FeatureFeatureFeatureFeatureFeatureFeatureFeatureFeatureFeatureFeature</li>
                        </ul>     
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;