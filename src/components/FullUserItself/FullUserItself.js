import React from "react";
import { connect } from "react-redux";
import { useRouteMatch } from 'react-router-dom';
import { UserInfo } from "../UserInfo/UserInfo";

const FullUserItself = ({ userList }) => {
    const match = useRouteMatch();
    const currentUser = userList.find(user => user.login.username === match.params.username.slice(1,))

    return (
        <>
            {
                currentUser ? (
                    <UserInfo user={currentUser}/>
                ) : <p>This user not exist</p>
            }
        </>
    );
};


const mapStateToProps = state => ({
    userList: state.reducerUsers.userList,
});


export default connect(mapStateToProps, null)(FullUserItself);