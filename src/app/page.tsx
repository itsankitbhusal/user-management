import Users from '@/components/Users'
import React from 'react'

interface IProps {
  searchParams: {
      page?: string;
      q?: string;
    };
}
const Homepage = async ({ searchParams }: IProps) => {
  const awaitedSearchParams = await searchParams;
  const queryParams = {
    currentPage: Number(awaitedSearchParams.page) || 1,
    search: awaitedSearchParams.q || ""
  }
  return (
    <Users {...queryParams} />
  )
}

export default Homepage