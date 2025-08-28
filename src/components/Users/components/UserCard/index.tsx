import CustomButton from '@/components/CustomButton';
import { IUser } from '@/resources/Users/interface';
import { useRouter } from 'next/navigation';
import { LuUser, LuMail, LuPhone } from 'react-icons/lu';
import { Card } from 'semantic-ui-react';

interface IProps extends IUser {
  showAt?: boolean;
}

const UserCard: React.FC<IProps> = ({ id, name, username, email, phone, showAt }: IProps) => {
  const router = useRouter();
  const initials = name
    .split(' ')
    .map((n: string) => n[0])
    .join('')
    .toUpperCase();

  return (
    <Card className="flex flex-col m-0! justify-between rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 bg-white">
      <div className="flex justify-center pt-6">
        <div className="bg-blue-500 text-white w-16 h-16 flex items-center justify-center rounded-full text-lg font-semibold">
          {initials}
        </div>
      </div>

      <Card.Content className="text-center px-6 pt-4 pb-2">
        <Card.Header className="text-lg font-semibold text-gray-800">
          {name}
        </Card.Header>
        <Card.Meta className="text-gray-400">{showAt ? "@" : null}{username}</Card.Meta>

        <div className="space-y-3 text-gray-600 text-sm">
          <p className="flex items-center gap-2">
            <LuMail className="text-gray-400" /> {email}
          </p>
          <p className="flex items-center gap-2">
            <LuPhone className="text-gray-400" /> {phone}
          </p>
        </div>
      </Card.Content>

      <Card.Content extra className="flex justify-center">
        <CustomButton
          onClick={() => router.push(`/user/${id}`)}
          label="View Profile"
          icon={<LuUser />}
        />
      </Card.Content>
    </Card>
  );
};

export default UserCard;
