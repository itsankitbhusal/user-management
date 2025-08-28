"use client"
import { Message } from 'semantic-ui-react'

const UserDetailError = ({ error }: { error: unknown }) => {
  return (
    <Message negative>
      <Message.Header>Error fetching user</Message.Header>
      <p>{(error as Error)?.message || "Something went wrong"}</p>
    </Message>
  )
}

export default UserDetailError