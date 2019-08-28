import React, { Component } from 'react';
import classes from "./Experience.module.css";
import placeHolder from '../../assets/images/crane.svg';

export class Experience extends Component {
    
    render() {
        return (
            <div className={classes.Experience}>
                <div className={classes.AppsContainer}>
                    <div className={classes.App}>
                        <h2 className={classes.appTitle}>Burger Builder</h2>
                        <img src={placeHolder} alt="placeHolder" className={classes.AppImage}></img>
                        <div className={classes.listContainer}>
                        <ul className={classes.list}>
                            <li>FeatureFeatureFeatureFeatureFeatureFeatureFeature</li>
                            <li>FeatureFeatureFeatureFeatureFeature</li>
                            <li>FeatureFeatureFeatureFeatureFeatureFeatureFeatureFeatureFeatureFeature</li>
                        </ul>     
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;