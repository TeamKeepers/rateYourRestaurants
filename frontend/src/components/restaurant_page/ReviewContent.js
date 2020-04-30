import React, { Component } from 'react';
import styled from "styled-components";

const Content = styled.p`
    padding: 15px;
    font-size: 16px;
    font-weight: 300;
    color: #000000;
`;

class ReviewContent extends Component {
    render() {
        return <>
            <Content>{this.props.review.content}</Content>
        </>
    }
}

export default ReviewContent
