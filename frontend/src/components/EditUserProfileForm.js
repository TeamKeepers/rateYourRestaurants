import React, {Component} from 'react'
import {connect} from "react-redux";
import beanie from "../assets/beanie.webp";
import star from "../assets/star.svg";
import comments from "../assets/comment.svg";
import restaurant from "../assets/restaurant.svg";
import edit from "../assets/edit.svg";
import StyledForm from "./StyledForm";
import "./UserProfilePage.css";
import NavigationBar from "./NavigationBar";




class EditUserProfileForm extends Component {
    state = {
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        location: "",
        phone: "",
        things_i_love: "",
        description: ""
    }

    UpdateProfileFormHandler = event => {
        const value = event.currentTarget.value;
        const name = event.target.name;
        this.setState({
            [name]: value,
        })

    }

    render() {
        return (<>
            <NavigationBar location=""/>
            <div className="user-profile-main-container">
                <div className="user-profile-banner">
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
                                    <p>Edit Profile</p>
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
                            <div className='user-profile-middle-section'>
                                <div className="user-profile-middle-top-section">
                                    <h2>Bea P.</h2>
                                    <p>Zurich, CH</p>
                                    <p> 6 Reviews</p>
                                    <p>210 Comments</p>
                                </div>
                                <div className="user-profile-middle-bottom-section">
                                    <StyledForm>
                                        <h2>UPDATE USER PROFILE</h2>
                                        <form onSubmit={(e) => this.UpdateProfileFormHandler(e)}>
                                            <label>Username</label>
                                            <input
                                                type="text"
                                                value={this.state.username}
                                                onChange={e => this.setState({"username": e.target.value})}
                                            />
                                            <label>First name</label>
                                            <input
                                                type="text"
                                                value={this.state.first_name}
                                                onChange={e => this.setState({"first_name": e.target.value})}
                                            />
                                            <label>Last name</label>
                                            <input
                                                type="text"
                                                value={this.state.last_name}
                                                onChange={e => this.setState({"last_name": e.target.value})}
                                            />
                                            <label>E-Mail</label>
                                            <input
                                                type="text"
                                                value={this.state.email}
                                                onChange={e => this.setState({"email": e.target.value})}
                                            />
                                            <label>Location</label>
                                            <input
                                                type="text"
                                                value={this.state.location}
                                                onChange={e => this.setState({"location": e.target.value})}
                                            />
                                            <label>Phone</label>
                                            <input
                                                type="text"
                                                value={this.state.phone}
                                                onChange={e => this.setState({"phone": e.target.value})}
                                            />
                                            <label>Things I love</label>
                                            <input
                                                type="text"
                                                value={this.state.thinds_i_love}
                                                onChange={e => this.setState({"things_i_love": e.target.value})}
                                            />
                                            <label>Description</label>
                                            <input
                                                type="text"
                                                value={this.state.description}
                                                onChange={e => this.setState({"description": e.target.value})}
                                            />
                                            <div className="button-container">
                                                <button type="submit"
                                                        onClick={(e) => this.UpdateProfileFormHandler(e)}>Save
                                                </button>
                                                <button type="submit"
                                                        onClick={(e) => this.UpdateProfileFormHandler(e)}>Delete acount
                                                </button>
                                            </div>
                                        </form>
                                    </StyledForm>
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
                                    <text>Im professional photographer with an eye for details in every thing I do in my
                                        live.
                                        Every time a pass by a nice restaurant i have to stop and take notes
                                    </text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default EditUserProfileForm;
