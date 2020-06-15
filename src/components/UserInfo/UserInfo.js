import React from 'react';
import { PropTypes } from "prop-types"
import LogInOut from '../LogInOut/LogInOut';

import "./UserInfo.css";

export const UserInfo = ({ user }) => {
    return (
        <>
            <div className="log-in-out-user-info">
                <LogInOut loggedValue={false} title="LogOut" />
            </div>
            <ul className="collection user-info-container">
                <li className="collection-item">
                    <img src={user.picture.medium} alt="" />
                </li>
                <li className="collection-item">Gender: {user.gender}</li>
                <ul className="collection container-item-block">
                    Name:
                <li className="collection-item">Title: {user.name.title}</li>
                    <li className="collection-item">Last name: {user.name.last}</li>
                    <li className="collection-item">First name: {user.name.first}</li>
                </ul>

                <ul className="collection container-item-block">
                    Location:
                <li className="collection-item">
                        Street:
                    <ul className="collection">
                            <li className="collection-item">Number: {user.location.street.number}</li>
                            <li className="collection-item">Name: {user.location.street.name}</li>
                        </ul>
                    </li>
                    <li className="collection-item">City: {user.location.city}</li>
                    <li className="collection-item">State: {user.location.state}</li>
                    <li className="collection-item">Country: {user.location.counter}</li>
                    <li className="collection-item">Postcode: {user.location.postcode}</li>
                    <li className="collection-item">Coordinates:
                    <ul className="collection container-item-block">
                            <li className="collection-item">Latitude: {user.location.coordinates.latitude}</li>
                            <li className="collection-item">Longitude: {user.location.coordinates.longitude}</li>
                        </ul>
                    </li>
                    <li className="collection-item">Timezona:
                    <ul className="collection container-item-block">
                            <li className="collection-item">Offset: {user.location.timezone.offset}</li>
                            <li className="collection-item">Description: {user.location.timezone.description}</li>
                        </ul>
                    </li>
                </ul>
                <li className="collection-item">Email: {user.email}</li>
                <ul className="collection container-item-block">
                    Login:
                <li className="collection-item">uuid: {user.login.uuid}</li>
                    <li className="collection-item">username: {user.login.username}</li>
                    <li className="collection-item">password: {user.login.password}</li>
                    <li className="collection-item">salt: {user.login.salt}</li>
                    <li className="collection-item">md5: {user.login.md5}</li>
                    <li className="collection-item">sha1: {user.login.sha1}</li>
                    <li className="collection-item">sha256: {user.login.sha256}</li>
                </ul>
                <ul className="collection container-item-block">
                    Dob:
                <li className="collection-item">date: {user.dob.date}</li>
                    <li className="collection-item">age: {user.dob.age}</li>
                </ul>
                <ul className="collection container-item-block">
                    registered:
                <li className="collection-item">registered: {user.registered.date}</li>
                    <li className="collection-item">age: {user.registered.age}</li>
                </ul>
                <li className="collection-item">Phone: {user.phone}</li>
                <li className="collection-item">cell: {user.cell}</li>
                <ul className="collection container-item-block">
                    id:
                <li className="collection-item">name: {user.id.name}</li>
                    <li className="collection-item">value: {user.id.value}</li>
                </ul>
                <li className="collection-item">nat: {user.nat}</li>
            </ul>
        </>
    )
}

UserInfo.propTypes = {
    user: PropTypes.shape({
        gender: PropTypes.string,
        name: PropTypes.shape({
            title: PropTypes.string,
            first: PropTypes.string,
            last: PropTypes.string,
        }),
        location: PropTypes.shape({
            street: PropTypes.shape({
                number: PropTypes.number,
                name: PropTypes.string,
            }),
            city: PropTypes.string,
            state: PropTypes.string,
            country: PropTypes.string,
            postcode: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            coordinates: PropTypes.shape({
                latitude: PropTypes.string,
                longitude: PropTypes.string,
            }),
            timezone: PropTypes.shape({
                offset: PropTypes.string,
                description: PropTypes.string,
            }),
        }),
        email: PropTypes.string,
        login: PropTypes.shape({
            uuid: PropTypes.string,
            username: PropTypes.string,
            password: PropTypes.string,
            salt: PropTypes.string,
            md5: PropTypes.string,
            sha1: PropTypes.string,
            sha256: PropTypes.string,
        }),
        dob: PropTypes.shape({
            date: PropTypes.string,
            age: PropTypes.number,
        }),
        registered: PropTypes.shape({
            date: PropTypes.string,
            age: PropTypes.number,
        }),
        phone: PropTypes.string,
        cell: PropTypes.string,
        id: PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.string,
        }),
        picture: PropTypes.shape({
            large: PropTypes.string,
            medium: PropTypes.string,
            thumbnail: PropTypes.string,
        }),
        nat: PropTypes.string,
    })
}

UserInfo.defaultProps = {
    user: PropTypes.shape({
        gender: "",
        name: PropTypes.shape({
            title: "",
            first: "",
            last: "",
        }),
        location: PropTypes.shape({
            street: PropTypes.shape({
                number: "",
                name: "",
            }),
            city: "",
            state: "",
            country: "",
            postcode: "",
            coordinates: PropTypes.shape({
                latitude: "",
                longitude: "",
            }),
            timezone: PropTypes.shape({
                offset: "",
                description: "",
            }),
        }),
        email: "",
        login: PropTypes.shape({
            uuid: "",
            username: "",
            password: "",
            salt: "",
            md5: "",
            sha1: "",
            sha256: "",
        }),
        dob: PropTypes.shape({
            date: "",
            age: "",
        }),
        registered: PropTypes.shape({
            date: "",
            age: "",
        }),
        phone: "",
        cell: "",
        id: PropTypes.shape({
            name: "",
            value: "",
        }),
        picture: PropTypes.shape({
            large: "",
            medium: "",
            thumbnail: "",
        }),
        nat: "",
    })
}