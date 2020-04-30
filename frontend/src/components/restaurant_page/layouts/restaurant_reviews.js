import React, { Component } from 'react'
import store from '../../../store';
import styled from "styled-components";
import Reviews from '../Reviews'
const FilterWrapper = styled.div`    
    form {
        width: 650px;
        display: flex;
        padding: 20px 0px;
        justify-content: space-between;
        margin: 0;

            
        input {
            width: 510px;
            height: 40px;
            border-radius: 3px;
            border: solid 1px #ebebeb;
            background-color: #ffffff;
            outline: none;
            font-size: 16px;
        }
        
    } 
        button {
            width: 120px;          
            height: 40px;
            border-radius: 28px;
            font-size: 16px;
            text-align: center;
            color: #ffffff;
            background-color: #e47d31;
            border: 0px;
            outline: none;
            cursor: pointer;
        }
`;
class Filter extends Component {
    state = {
        query: "",
    };

    search(e) {
        e.preventDefault();
        store.dispatch({type: "SEARCH_REVIEWS", payload: this.state.query});
    }

    render() {
        return (
            <>
                <FilterWrapper>
                <form>
                    <input
                        placeholder="Filter list..."
                        type="text"
                        value = {this.state.query}
                        onChange = {e => this.setState({query: e.target.value})}
                    />
                        <button>FILTER</button>
                    </form>
                </FilterWrapper>
            </>
        )
    }
}

class RestaurantReviews extends Component {
    render() {
        return (
            <>
                <Filter/>
                <Reviews/>
            </>
        );
    }
}

export default RestaurantReviews;
