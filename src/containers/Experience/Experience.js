import React, { Component } from 'react';
import classes from "./Experience.module.css";
import placeHolder from '../../assets/images/crane.svg';

export class Experience extends Component {
    
    render() {
        return (
            <div className={classes.Experience}>
                <div className={classes.AppContainer}>
                    <header className={classes.appTitle}>Burger Builder</header>
                    <img src={placeHolder} alt="placeHolder" className={classes.AppImage}></img>
                    <div className={classes.listContainer}>
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