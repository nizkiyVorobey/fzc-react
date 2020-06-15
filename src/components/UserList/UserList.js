import React, { useEffect, useState } from "react";
import LogInOut from "../LogInOut/LogInOut";
import { connect } from "react-redux";
import { UserItem } from "../UserItem/UserItem";

import "./UserList.css";

const UserList = ({ userList }) => {
    const [sortedUserList, setSortedUserList] = useState(userList);
    const [visibleUserList, setVisibleUserList] = useState(userList);

    const [filterFieldValue, setFilterFieldValue] = useState('');

    const [sortedDirection, setSortedDirection] = useState({
        name: 'forward',
        birthday: 'forward'
    });

    const sortBy = (param) => {
        let sortedList = null;

        switch (param) {
            case 'name':
                sortedList = visibleUserList
                    .sort((userA, userB) => {
                        let fullNameA = userA.name.first + " " + userA.name.last;
                        let fullNameB = userB.name.first + " " + userB.name.last;

                        if (fullNameA < fullNameB) //сортируем строки по возрастанию
                            return -1
                        if (fullNameA > fullNameB)
                            return 1
                        return 0 // Никакой сортировки
                    })

                if (sortedDirection.name === 'forward') {
                    setSortedUserList(sortedList);
                    setSortedDirection({
                        name: 'reverse',
                        birthday: 'forward'
                    })
                } else {
                    setSortedUserList(sortedList.reverse());
                    setSortedDirection({
                        name: 'forward',
                        birthday: 'forward'
                    })
                }

                break;

            case 'birthday':
                sortedList = visibleUserList
                    .sort((userA, userB) => new Date(userA.dob.date) - new Date(userB.dob.date));

                if (sortedDirection.birthday === 'forward') {
                    setSortedUserList(sortedList);
                    setSortedDirection({
                        name: 'forward',
                        birthday: 'reverse'
                    })
                } else {
                    setSortedUserList(sortedList.reverse());
                    setSortedDirection({
                        name: 'forward',
                        birthday: 'forward'
                    })
                }

                break;

            default:
                return userList
        }
    }


    const handleFieldValue = (event) => {
        setFilterFieldValue(event.target.value);
    }



    useEffect(() => {
        setVisibleUserList([...sortedUserList]
            .filter(user => user.name.last.toLocaleLowerCase().includes(filterFieldValue.toLocaleLowerCase()))
        )
    }, [filterFieldValue]);

    return (
        <>
            <div className="filtered-field-wrapper">
                    <div className="input-field">
                        <input
                            value={filterFieldValue}
                            id="last_name"
                            type="text"
                            className="validate"
                            onChange={handleFieldValue}
                        />
                        <label className="active" htmlFor="last_name">Last Name</label>
                    </div>
            </div>
            <div className="log-in-out-user-list">
                <LogInOut loggedValue={false} title="LogOut" />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th onClick={() => sortBy('name')} className="sorted">Name</th>
                        <th>Email</th>
                        <th onClick={() => sortBy('birthday')} className="sorted">Birthday</th>
                        <th>View</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        visibleUserList.map(user => <UserItem user={user} key={user.login.uuid} />)
                    }
                </tbody>
            </table>
        </>
    );
};

const mapStateToProps = state => ({
    userList: state.reducerUsers.userList,
});



export default connect(mapStateToProps, null)(UserList);
