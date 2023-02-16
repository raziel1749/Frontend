import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UsersData() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setError(null);
                setUsers(null);
                setLoading(true);
                const response = await axios.get(
                    '/api'
                );
                setUsers(response.data);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };

        fetchUsers();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;
    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    {user.companyName} {user.itemCode} {user.item} {user.itemNo}
                    {user.pn} {user.itemGroup} {user.itemSize} {user.unit} {user.purUnit}
                    {user.purCnt} {user.distUnit} {user.distCnt} {user.yieldUnit}
                    {user.yieldCnt}
                </li>
            ))}
        </ul>
    );
}

export default UsersData;