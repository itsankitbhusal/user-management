import { IUser } from '@/resources/Users/interface';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import { useRouter } from 'next/navigation';

interface IProps extends IUser { }

const UserCard: React.FC<IProps> = ({
    id,
    name,
    username,
    email,
    address,
    phone,
    website,
    company,
}) => {
    const router = useRouter();
    const fullAddress = `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;
    const initials = name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase();

    return (
        <Card fluid>
            <Card.Content>
                <Image
                    floated='right'
                    size='mini'
                    // src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                    //     name
                    // )}&background=random`}
                    circular
                />
                <Card.Header>{name}</Card.Header>
                <Card.Meta>@{username}</Card.Meta>
                <Card.Description>
                    <p><Icon name='mail' /> {email}</p>
                    <p><Icon name='phone' /> {phone}</p>
                    <p><Icon name='globe' /> {website}</p>
                    <p><Icon name='building' /> {company.name}</p>
                    <p><Icon name='quote left' /> {company.catchPhrase}</p>
                    <p><Icon name='map marker alternate' /> {fullAddress}</p>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <button
                        className="ui basic button"
                        onClick={() => router.push(`/users/${id}`)}
                    >
                        View
                    </button>
                    <button
                        className="ui basic button"
                        onClick={() => router.push(`/users/${id}`)}
                    >
                        Message
                    </button>
                </div>
            </Card.Content>
        </Card>
    );
};

export default UserCard;