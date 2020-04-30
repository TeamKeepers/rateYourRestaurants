import React, {Component} from "react";
import StyledForm from "./StyledForm.js";
import NavigationBar from "./NavigationBar";

const Registration = () => (
    <>
        <NavigationBar location=""/>
        <StyledForm>
            <h2>REGISTRATION</h2>
            <form>
                <input placeholder="E-mail" type="text"/>
                <button type="submit">Register</button>
            </form>
        </StyledForm>
    </>
);

export default Registration;
