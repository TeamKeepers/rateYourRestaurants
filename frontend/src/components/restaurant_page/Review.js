import React, { Component } from 'react';
import ReviewContent from './ReviewContent';
import { connect } from 'react-redux';
import Avatar from "../../assets/avatar.jpg";
import Stars from "../Stars";
import styled from "styled-components";
import Time from 'react-time';
import likeAction from '../../store/actions/like_review';
import store from "../../store";


const ReviewWrapper = styled.div`
    height: auto;
    width: 650px;
    background-color: white;
    border-radius: 3px;
    margin-bottom: 15px;
`;
const Header = styled.div`
    height: 66px;
    border-bottom: solid 1px #ebebeb;
    display: flex;
    
    img {
        width: 66px;   
        height: 66px;
    }
    h2 {
        
    }
`;
const Date = styled(Time)`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;
    font-size: 14px;
    font-weight: 300;
    color: #000000;
    padding: 10px;
`;
const Author = styled.div`
    p {
        font-size: 20px;
        font-weight: bold;
        color: #e47d31;
        padding: 10px 10px 0px 10px;
    }
    p + p {
        font-size: 14px;
        font-weight: bold;
        color: #4c4c4c;
        padding: 4px 10px;
    }
`;
const Score = styled.div`
    padding: 10px;
`;

const Footer = styled.div`
    display: flex;
    padding: 10px;
    p {
        display: flex;
        flex-grow: 1; 
        justify-content: flex-end;
        align-items: center;
        font-size: 16px;  
        color: #e47d31;   
    }
`;
const ActionButton = styled.button`
    background-color: rgba(145, 145, 145, 0.6);
    font-size: 16px;
    color: white;
    text-decoration: none;
    border: none;
    outline: none;
    width: 124px;
    height: 33px;
    font-weight: 300;
    font-family: Roboto;
    cursor: pointer;
    &:hover {
        background: #e98539;
    }
`;

const LikeButton = styled(ActionButton)`
    border-top-left-radius: 28px;
    border-bottom-left-radius: 28px;
    background-color: ${(props) => props.clicked ? "#e98539" : "rgba(145, 145, 145, 0.6)"};
`;
const CommentButton = styled(ActionButton)`
    border-top-right-radius: 28px;
    border-bottom-right-radius: 28px;
    margin-left: 1px;
`;


class Review extends Component {

    likeReview() {
        store.dispatch(likeAction(this.props.review.id, this.props.token));
    }

    render() {
        return(
            <>
                <ReviewWrapper>
                    <Header>
                        <img src = {Avatar}/>
                        <Author>
                            <p>{this.props.review.idUser.first_name} {this.props.review.idUser.last_name}</p>
                            <p>{this.props.review.idUser.number_of_reviews} Reviews in total</p>
                        </Author>
                        <Score>
                            <Stars stars={this.props.review.rating}/>
                        </Score>
                        <Date
                            value={this.props.review.date_created}
                            titleFormat = "YYYY/MM/DD HH:mm"
                            relative
                        />
                    </Header>
                        <ReviewContent review={this.props.review}></ReviewContent>
                    <Footer>
                        <LikeButton onClick={() => this.likeReview()} clicked={this.props.review.current_user_liked}>
                            Like {this.props.review.amount_of_likes}</LikeButton>
                        <CommentButton>Comment {this.props.review.amount_of_comments}</CommentButton>
                        <p>View all comments</p>
                    </Footer>
                </ReviewWrapper>

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.token,
    }
};
const connection = connect(mapStateToProps);
const ConnectedReview = connection(Review);

export default ConnectedReview;
