import React from 'react';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/Gallery">Gallery</NavigationItem>
        <NavigationItem link="/Experience">Experience</NavigationItem>
    </ul>
);

export default navigationItems;