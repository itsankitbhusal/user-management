"use client"
import React from 'react'
import { useGetUsers } from '@/hooks/useUsers'
import logger from '@/utils/logger';

const Users = () => {
    const { data, isLoading, error } = useGetUsers();
    logger.log("data: ", data);
    logger.log("isLoading: ", isLoading);
    logger.log("error: ", error);
    return (
        <>
            {data?.map((user) => (
                <div key={user.id}>{user.id} {user.name}</div>
            ))}
        </>
    )
}

export default Users