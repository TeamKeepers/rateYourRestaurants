import React, { Component } from 'react';
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



import styled from "styled-components";

const PriceRange = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
`;

const DollarIcon = styled(FontAwesomeIcon)`
    margin: 0;
    width: 30px;
    height: 30px;
    opacity: 0.1;
    filter: brightness(0) saturate(100%) invert(87%) sepia(2%) saturate(2572%) hue-rotate(194deg) brightness(124%) contrast(73%);
    ${props => props.lit && `
        filter: brightness(0) saturate(100%) invert(0%) sepia(96%) saturate(17%) hue-rotate(100deg) brightness(95%) contrast(101%);
        opacity: 1;
    `}
`;

class Stars extends Component {
    render() {
        return (
            <PriceRange>
                <DollarIcon icon={faDollarSign} lit={this.props.dollars >= 1}/>
                <DollarIcon icon={faDollarSign} lit={this.props.dollars >= 2} />
                <DollarIcon icon={faDollarSign} lit={this.props.dollars >= 3} />
                <DollarIcon icon={faDollarSign} lit={this.props.dollars >= 4} />
            </PriceRange>
        );
    }
}

export default Stars;