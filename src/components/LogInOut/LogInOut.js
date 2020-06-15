import React from "react";
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { PropTypes } from "prop-types"

import { loggedCreator } from "../../store/store";

const LogInOut = ({ setLogged, loggedValue, title }) => {
    const history = useHistory();

    // we successfully logged
    const handleClick = () => {

        if (!loggedValue) {
            history.push('/')

        }

        setLogged(loggedValue);
    }

    return (
        <a className="waves-effect waves-light btn" onClick={handleClick}>{title}</a>
    );
};

LogInOut.propTypes = {
    setLogged: PropTypes.func.isRequired,
    loggedValue: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
}

const mapDispatchToProps = dispatch => ({
    setLogged: value => dispatch(loggedCreator(value))
})

export default connect(null, mapDispatchToProps)(LogInOut)