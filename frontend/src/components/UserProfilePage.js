import React, { Component } from "react";

import "./UserProfilePage.css";

import beanie from "../assets/beanie.webp";
import star from "../assets/star.svg";
import comments from "../assets/comment.svg";
import restaurant from "../assets/restaurant.svg";
import edit from "../assets/edit.svg";
import NavigationBar from "./NavigationBar";

import { Link  } from "react-router-dom";
import styled from "styled-components";

const Links = styled(Link)`
    text-decoration: none;
    color: black;
`;



class UserProfilePage extends Component {
  render() {
    return (<>
      <NavigationBar location="profile"/>
      <div className="user-profile-main-container">
        <div className="user-profile-banner" />

        <div className="user-profile-container">
          <div className="user-profile-details-section">
            <img src={beanie} alt=""/>
            <p> Bea's profile</p>
            <div className="user-profile-details-boxes">
              <div className="user-profile-details-box">
                <div className="icon-container">
                  <img src={star} alt=""/>
                </div>
                <p>Reviews</p>
              </div>
              <div className="user-profile-details-box">
                <div className="icon-container">
                  <img src={comments} alt=""/>
                </div>
                <p>Comments</p>
              </div>
              <div className="user-profile-details-box">
                <div className="icon-container">
                  <img src={restaurant} alt=""/>
                </div>
                <p>Restaurants</p>
              </div>
              <div className="user-profile-details-box">
                <div className="icon-container">
                  <img src={edit} alt=""/>
                </div>

                 <Links to="/editprofile"> <p>Edit Profile</p></Links>

              </div>
            </div>
          </div>
          <div className='user-profile-middle-section'>
              <div className="user-profile-middle-top-section">
                <h2>Bea P.</h2>
                <p>Zurich, CH</p>
                <p> 6 Reviews</p>
                <p>210 Comments</p>
          </div>
          <div className="user-profile-middle-bottom-section">
               <div className='review-main-container'>
                    <h2>REVIEWS</h2>
                  <div className='review-main-header'>
                    <h6>Laderach Chocolatier Suisse</h6>
                  </div>
                   <p>This location at the Bahnhofstrasse is quite friendly and easily located across the street from the train station.
                       The people there seem to be quite good and helpful in their service. </p>
                </div>

          </div>
          </div>

          <div className="user-profile-about-section">
          <h2>ABOUT BEA </h2>
            <label>Location</label>
            <text>Zurich, CH</text>
            <label>Lune member since</label>
            <text>March, 2020</text>
            <label>Things I love</label>
            <text>Everything</text>
            <label>Description</label>
            <text>Im professional photographer with an eye for details in every thing I do in my live.
                            Every time a pass by a nice restaurant i have to stop and take notes</text>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default UserProfilePage;
