import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import LoginForm from "./LoginForm";
import Registration from "./RegistrationPage";
import Search from "./SearchPage";
import Restaurant from "./restaurant_page/Restaurant"

import NavigationBar from './NavigationBar'
import Footer from './Footer';
import UserProfilePage from "./UserProfilePage";
import Home from "./home_page";
import EditUserProfileForm from './EditUserProfileForm';

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact={ true } path="/" component={Home} />
                        <Route exact={ true } path="/login" component={LoginForm} />
                        <Route exact={ true } path="/register" component={Registration} />
                        <Route exact={ true } path="/search" component={Search} />
                        <Route exact={ true } path="/restaurant/:id" component={Restaurant} />
                        <Route exact={ true } path="/userprofile" component={UserProfilePage} />
                        <Route exact={true} path="/editprofile" component={EditUserProfileForm} />
                    </Switch>
                    <Footer/>
                </BrowserRouter>
            </div>
        );
    }
}
export default App;
