import React, { useState, useEffect } from 'react';
import axios from "axios";

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get('http://localhost:81/api/users');
                setUsers(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchUsers();
    }, []);

    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
            {users.map(user => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default UserList;
