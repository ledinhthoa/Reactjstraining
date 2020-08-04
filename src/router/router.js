import React, { Component } from 'react';
import Conten from '../component/conten';
import Signin from '../component/singin';
import Register from '../component/register';
import Listuser from '../component/listuser';
import EditUser from '../component/editUser';
import { Route } from "react-router-dom";

class Routercontens extends Component {
    render() {
        return (
            <div>
                <div className="main-route-place">
                    <Route exact path="/" component={Conten} />
                    <Route path="/Signin" component={Signin} />
                    <Route path="/Register" component={Register} />
                    <Route path="/Listuser" component={Listuser} />
                    <Route path="/EditUser/:id" component={EditUser} />
                    
                </div>
            </div>
        );
    }
}

export default Routercontens;