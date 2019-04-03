import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import HomePage from '../components/HomePage';
import PortfolioPage from '../components/PortfolioPage';
import ContactPage from '../components/ContactPage';
import PortfolioPageDetail from '../components/PortfolioPageDetail';



//seperate 6 components
//setup import component default export, 
//import to app router

const AppRouter =()=>(
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={HomePage} exact={true} />
            <Route path="/portfolio/" component={PortfolioPage} exact={true} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/portfolio/:id" component={PortfolioPageDetail} />
           
            <Route component={NotFoundPage} />

        </Switch>
    </div>
        
        
        
    </BrowserRouter>
);
export default AppRouter;