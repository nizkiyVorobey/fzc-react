import React from "react";
import {connect} from "react-redux";

import {PropTypes} from "prop-types"

import LogInOut from "../LogInOut/LogInOut";
import { Preloader } from "../Preloader/Preloader";

import "./InitialPage.css";

const InitialPage = ({pending}) => {
    return (
        <article className="initial-page">
            <div className="log-in-out-initial-page">
                <LogInOut loggedValue={true} title="LogIn"/>
            </div>
            {
                pending ? (
                    <div className="preloader-initial-page-wrapper">
                        <Preloader/>
                    </div>
                ) : null
            }
        </article>
    );
};

InitialPage.propTypes = {
    pending: PropTypes.bool
}

InitialPage.defaultProps = {
    pending: null
}

const mapStateToProps = state => ({
    pending: state.reducerUsers.pending,
});

 export default connect(mapStateToProps, null)(InitialPage);
