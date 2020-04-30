import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store/index';
import serverUrl from "../../server";
import RestaurantView from "./layouts/restaurant_layout"
import Review from "./Review";
import NavigationBar from "../NavigationBar";

class Restaurant extends Component{
    componentDidMount() {
        this.fetchReviews();
        this.fetchRestaurant()
    }

    fetchReviews() {
        const {id} = this.props.match.params;
        const base_address = serverUrl + `reviews/restaurant/${id}/`;
        let suffix = '';
        if (this.props.query.length > 0) suffix += "?search=" + this.props.query;

        fetch(base_address + suffix, {
            method: 'GET',
            //headers: new Headers({'Authorization': 'Bearer ' + this.props.token})
        })
        .then((response) => response.json())
        .then((results) => {
            store.dispatch({type: "FETCH_REVIEWS", payload: results})
        });
    }

    fetchRestaurant(){
        const {id} = this.props.match.params;
        const base_address = serverUrl + `restaurants/${id}/`;

        fetch(base_address, {
            method: 'GET',
            //headers: new Headers({'Authorization': 'Bearer ' + this.props.token})
        })
        .then((response) => response.json())
        .then((results) => {
            console.log(results);
            store.dispatch({type: "FETCH_RESTAURANT", payload: [results]})
        });
    }

   render() {
        console.log(this.props.restaurant);
        return <>
            <NavigationBar location=""/>
            {this.props.restaurant ?
                <RestaurantView key={this.props.restaurant.id} restaurant={this.props.restaurant}/>
             :null
            }}

        </>
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        token: state.token,
        reviews: state.reviews,
        query: state.query,
        restaurant: state.current_restaurant
    }
};
const connection = connect(mapStateToProps);
const ConnectedRestaurant = connection(Restaurant);

export default ConnectedRestaurant;
