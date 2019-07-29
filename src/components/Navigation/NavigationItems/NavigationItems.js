import React from 'react';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul>
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/Gallery">Gallery</NavigationItem>
        <NavigationItem link="/Experience">Experience</NavigationItem>
    </ul>
);

export default navigationItems;