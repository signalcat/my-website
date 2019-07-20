import React from 'react';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul>
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/Gallery">Gallery</NavigationItem>
    </ul>
);

export default navigationItems;