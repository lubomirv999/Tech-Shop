import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Register from './User/Register/Register';
import Login from './User/Login/Login';
import Logout from './User/Logout/Logout';
import HomePageContent from './Content/HomePageContent';
import About from './About/About';
import AllUsers from './User/All/AllUsers';
import UserProfile from './User/UserProfile/UserProfile';
import EditUser from './User/UserProfile/EditUser/EditUser';
import ProductCreate from './Content/Product/ProductCreate/ProductCreate';
import ProductEdit from './Content/Product/UpdateProduct/ProductUpdate';
import ProductConfirm from './Content/Product/BoughtProduct/ProductConfirm';
import ProductBuy from './Content/Product/BoughtProduct/BoughtProduct';
import AllReviews from './Content/Review/AllReviews/AllReviews';
import ReviewCreate from './Content/Review/ReviewCreate/ReviewCreate';
import ReviewEdit from './Content/Review/UpdateReview/ReviewUpdate';
import Success from './Content/Success/Success';
import NotFound from './NotFound/NotFound';

export default class AppRouter extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact component={HomePageContent} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/logout" exact component={Logout} />
                    <Route path="/users" exact component={AllUsers} /> 
                    <Route path="/user/:id" exact component={UserProfile} />  
                    <Route path="/user/edit/:id" exact component={EditUser} />   
                    <Route path="/product/create" exact component={ProductCreate} /> 
                    <Route path="/product/edit/:id" exact component={ProductEdit} /> 
                    <Route path="/product/confirm" exact component={ProductConfirm} />
                    <Route path="/product/buy" exact component={ProductBuy} />     
                    <Route path="/reviews" exact component={AllReviews} /> 
                    <Route path="/review/create" exact component={ReviewCreate} /> 
                    <Route path="/review/edit/:id" exact component={ReviewEdit} /> 
                    <Route path="/about" exact component={About} />  
                    <Route path="/success" exact component={Success} />               
                    <Route component={NotFound} />
                </Switch>
            </div>
        )
    }
}