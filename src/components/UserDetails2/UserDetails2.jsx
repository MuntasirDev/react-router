import React, {use}from 'react';

const UserDetails2 = ({ userPromise }) => {
    const {name,username}= use(userPromise)
    return (
        <div>
            <p><small> User name: {username}</small></p>
            <p><small> Name: {name}</small></p>
        </div>
    );
};

export default UserDetails2;