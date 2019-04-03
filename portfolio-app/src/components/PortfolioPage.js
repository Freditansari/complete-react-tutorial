import React from 'react'
import {Link, NavLink} from 'react-router-dom';


const PortfolioPage =()=>(
    <div> <NavLink to ="/portfolio/1" activeClassName="is-active">image 1</NavLink>
    <NavLink to ="/portfolio/2" activeClassName="is-active">image 2</NavLink></div>
);

export default PortfolioPage;

