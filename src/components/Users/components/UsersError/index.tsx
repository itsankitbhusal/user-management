import { Message } from 'semantic-ui-react'

const UsersError = ({ error }: { error: any }) => {
  return (
    <Message negative>
      <Message.Header>Error fetching users</Message.Header>
      <p>{error.message || "Something went wrong"}</p>
    </Message>
  )
}

export default UsersError