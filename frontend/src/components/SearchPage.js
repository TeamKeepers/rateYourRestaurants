import React, {Component} from "react";
import NavigationBar from "./NavigationBar";
import styled from "styled-components";
import Stars from "./Stars";
import Img from '../assets/restaurant.jpeg';
import { Link  } from "react-router-dom";
import serverUrl from "../server";
import store from "../store";
import RestaurantView from "./restaurant_page/layouts/restaurant_layout";
import {connect} from "react-redux";


const Tile = styled(Link)`
    background: white;
    border: 1px solid #ddd;
    border-top: 8px solid #e47d31;
    margin: 10px;
    width: 271px;
    color: #4c4c4c;
    text-decoration: none;
    img {
        width: 100%;
        max-height: 30vh;
    }
    article {
        padding: 10px;
    }
    h3, h4 {
        font-weight: normal;
    }
    h3 {
        font-size: 20px;
    }
    h4 {
        font-size: 16px;
        padding-top: 4px;
    }
`;
const Inline = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    span {
        margin-left: 10px;
        margin-top: 5px;
        font-size: 18px;
    }
`;
const Restaurants = styled.div`
    padding-top: 100px;
    display: flex;
    width: 1180px;
    flex-wrap: wrap;
`;
const Page = styled.div`
    display: flex;
    justify-content: center;
`;


class Search extends Component {

    componentDidMount() {
        this.fetchRestaurants()
    }

    fetchRestaurants() {
        const base_address = serverUrl + `restaurants/`;

        fetch(base_address, {
            method: 'GET',
            //headers: new Headers({'Authorization': 'Bearer ' + this.props.token})
        })
            .then((response) => response.json())
            .then((results) => {
                console.log(results);
                store.dispatch({type: "FETCH_RESTAURANTS", payload: results})
            });
    }

    render() {
        return <>
            <ConnectedRestaurantsPage/>
        </>
    }
}
export default Search


class Restaurant extends Component {
    render() {
        return <>
            <Tile to={`/restaurant/${this.props.restaurant.id}`}>
                <article>
                    <h3>{this.props.restaurant.name}</h3>
                    <h4>{this.props.restaurant.street}</h4>
                    <h4>{this.props.restaurant.zip} {this.props.restaurant.city}</h4>
                    <Inline>
                        <Stars stars={this.props.restaurant.avg_rating.rating}/>
                        <span>{this.props.restaurant.total_of_reviews}</span>
                    </Inline>
                </article>
                {
                    this.props.restaurant.image ? <img className="fit-img" src={this.props.restaurant.image} alt={this.props.restaurant.name} /> : <img src={Img}></img>
                }
            </Tile>
        </>
    }
}


class RestaurantsPage extends Component {
    render() {
        console.log(this.props.restaurants)
        return <>
            <NavigationBar location="search"/>
            <Page>
                <Restaurants>
                        {this.props.restaurants ?
                            this.props.restaurants.map((restaurant) => {
                                return (<Restaurant key={restaurant.id} restaurant={restaurant}/>)
                            }) : null
                        }

                </Restaurants>
            </Page>

               {/* <Restaurants>
                    <Restaurant></Restaurant>
                    <Restaurant></Restaurant>
                    <Restaurant></Restaurant>
                    <Restaurant></Restaurant>
                    <Restaurant></Restaurant>
                    <Restaurant></Restaurant>
                    <Restaurant></Restaurant>
                    <Restaurant></Restaurant>
                </Restaurants>*/}
        </>
    }
}
const mapStateToProps = (state) => {
    return {
        token: state.token,
        restaurants: state.restaurants
    }
};
const connection = connect(mapStateToProps);
const ConnectedRestaurantsPage = connection(RestaurantsPage);

