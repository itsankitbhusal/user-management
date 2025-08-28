import React from 'react'
import UserDetail from '@/components/UserDetail'

interface IProps {
    params: {
        id: string;
    };
}
const page = ({ params }: IProps) => {
    const { id } = params;
    return (
        <UserDetail id={Number(id)} />
    )
}

export default page