import React from "react";
import {Link} from "react-router-dom";
import { PropTypes } from "prop-types";

export const UserItem = ({user}) => {
    return (
        <tr>
            <td><img src={user.picture.thumbnail} alt=""/></td>
            <td>{user.name.first} {user.name.last}</td>
            <td>{user.email}</td>
            <td>{user.dob.date}</td>
            <td><Link to={`/user:${user.login.username}`}>See</Link></td>
        </tr>
    );
};

UserItem.propTypes = {
    user: PropTypes.shape({
        picture: PropTypes.shape({
            thumbnail: PropTypes.string.isRequired
        }),
        name: PropTypes.shape({
            first: PropTypes.string.isRequired,
            last: PropTypes.string.isRequired,
        }),
        email: PropTypes.string,
        dob: PropTypes.shape({
            date: PropTypes.string.isRequired,
        }),
        login: PropTypes.shape({
            username: PropTypes.string.isRequired,
        }),
    }).isRequired
}
