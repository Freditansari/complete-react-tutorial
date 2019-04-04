import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Info = (props) =>(
    <div>
        <h1>Info</h1>
        <p>the info is : {props.info}</p>
    </div>
)

const withAdminWarning =(WrappedComponents) =>{
    return(props)=>(
        <div>
            {props.isAdmin && <p> this is your pin : 143509</p>}
           
            <WrappedComponents {...props} />
        </div>
    )

};

const requireAuthentication = (WrappedComponents) =>{
    return(props) =>(
        <div>
            {props.isAuthenticated ? <WrappedComponents {...props}/>: <p>please authenticate to see your pin</p>}
        </div>

    )
}

// const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);


// ReactDOM.render(<AdminInfo isAdmin ={true} info='this is the detail' />, document.getElementById('app'));

ReactDOM.render(<AuthInfo isAuthenticated = {true} info='12354'/>, document.getElementById('app'));