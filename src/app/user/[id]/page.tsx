import React from 'react'
import UserDetail from '@/components/UserDetail'

interface IProps {
    params: {
        id: string;
    };
}
const page = async ({ params }: IProps) => {
    const { id } = await params;
    return (
        <UserDetail id={Number(id)} />
    )
}

export default page