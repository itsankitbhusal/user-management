import { Table } from "semantic-ui-react";
import { LuMail, LuPhone, LuUser, LuMapPin, LuBuilding2, LuGlobe } from "react-icons/lu";
import { IUser } from "@/resources/Users/interface";
import { useRouter } from "next/navigation";
import logger from "@/utils/logger";

interface IProps {
  users: IUser[];
}


const UserTable: React.FC<IProps> = ({ users }: IProps) => {
  const router = useRouter();
  const handleRowClick = (userId: number) => {
    logger.log(userId);
    router.push(`/users/${userId}`);
  };

  return (
    <Table celled selectable striped className="w-full border border-gray-200 shadow-sm rounded-lg overflow-hidden">
      <Table.Header className="bg-gray-50 h-16 ">
        <Table.Row>
          <Table.HeaderCell className="font-semibold whitespace-nowrap">Name</Table.HeaderCell>
          <Table.HeaderCell className="font-semibold whitespace-nowrap">Username</Table.HeaderCell>
          <Table.HeaderCell className="font-semibold whitespace-nowrap">Email</Table.HeaderCell>
          <Table.HeaderCell className="font-semibold whitespace-nowrap">Phone</Table.HeaderCell>
          <Table.HeaderCell className="font-semibold whitespace-nowrap">Address</Table.HeaderCell>
          <Table.HeaderCell className="font-semibold whitespace-nowrap">Company</Table.HeaderCell>
          <Table.HeaderCell className="font-semibold whitespace-nowrap">Website</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {users.map((user) => (
          <Table.Row key={user.id} onClick={() => handleRowClick(user.id)} className="hover:bg-gray-50 transition-colors cursor-pointer h-16">
            <Table.Cell className=" whitespace-nowrap">{user.name}</Table.Cell>
            <Table.Cell className=" whitespace-nowrap">@{user.username}</Table.Cell>
            <Table.Cell className=" whitespace-nowrap">
              <div className="flex items-center gap-2">
                <LuMail className="text-gray-400" /> {user.email}
              </div>
            </Table.Cell>
            <Table.Cell className=" whitespace-nowrap">
              <div className="flex items-center gap-2">
                <LuPhone className="text-gray-400" /> {user.phone}
              </div>
            </Table.Cell>
            <Table.Cell className=" whitespace-nowrap">
              <div className="flex items-center gap-2">
                <LuMapPin className="text-gray-400" /> {user.address?.city}
              </div>
            </Table.Cell>
            <Table.Cell className=" whitespace-nowrap">
              <div className="flex items-center gap-2">
                <LuBuilding2 className="text-gray-400" /> {user.company?.name}
              </div>
            </Table.Cell>
            <Table.Cell className=" whitespace-nowrap">
              <div className="flex items-center gap-2">
                <LuGlobe className="text-gray-400" /> {user.website}
              </div>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default UserTable;
