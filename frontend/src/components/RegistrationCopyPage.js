import React, { Component } from "react";
import styled from "styled-components";

const StyledRegistrationCopy = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column;
    width: 1440px;
    height: 802px;
    margin: 0 auto;
    padding: 150px 50px 75px 50px;
    background-color: #f8f8f8;
    h2 {
        width: 357px;
        height: 29px;
        font-family: Helvetica;
        font-size: 24px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #4c4c4c;
         border-bottom: solid 2px #e47d31;
        margin-top: 50px;
        margin-bottom: 75px; 
    }
    p {
        width: 497px;
        height: 144px;
        font-family: Helvetica;
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #4c4c4c;
    }
`;


const RegistrationCopy = () => (
  <StyledRegistrationCopy>
           <h2>REGISTRATION</h2>
            <p>Thanks for your registration.Our hard working monkeys are preparing a digital message called E-Mail that will be sent to you soon.
Since monkeys aren't good in writing the message could end up in you junk folder. Our apologies for any inconvienience. </p>


  </StyledRegistrationCopy>
);

export default RegistrationCopy;
