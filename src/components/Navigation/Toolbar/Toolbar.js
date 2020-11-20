import React from 'react';
import classes from '../Toolbar/Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo></Logo>
        <NavigationItems></NavigationItems>
    </header>
);


export default toolbar;