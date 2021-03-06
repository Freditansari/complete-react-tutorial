import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';



const Header =() =>(
    <header>
        <h1>expensify</h1>
        {/* <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/edit">Edit</Link>
        <Link to="/help">Help</Link> */}
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/portfolio" activeClassName="is-active" exact={true}>Portfolio</NavLink>
        {/* <NavLink to="/edit" activeClassName="is-active">Edit</NavLink> */}
        <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>

    </header>
);

export default Header;