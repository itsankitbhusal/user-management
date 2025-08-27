"use client"
import { useGetUsers } from '@/hooks/useUsers'
import logger from '@/utils/logger';
import UserCard from './components/UserCard';

const Users = () => {
    const { data, isLoading, error } = useGetUsers();
    logger.log("data: ", data);
    logger.log("isLoading: ", isLoading);
    logger.log("error: ", error);
    return (
        <>
            {data?.map((user) => (
                <UserCard key={user.id} id={user.id} name={user.name} username={user.username} email={user.email} address={user.address} phone={user.phone} website={user.website} company={user.company} />
            ))}
        </>
    )
}

export default Users