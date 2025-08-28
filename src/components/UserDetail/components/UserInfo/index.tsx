import { FaUser, FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";

interface IProps {
  username?: string;
  email?: string;
  phone?: string;
  website?: string;
}

const UserInfo = ({ username, email, phone, website }: IProps) => {
  return (
    <div>
      <p className="flex items-center gap-2 text-gray-700 mb-2">
        <FaUser className="text-blue-500" /> <span>{username}</span>
      </p>
      <p className="flex items-center gap-2 text-gray-700 mb-2">
        <FaEnvelope className="text-green-500" /> <span>{email}</span>
      </p>
      <p className="flex items-center gap-2 text-gray-700 mb-2">
        <FaPhone className="text-purple-500" /> <span>{phone}</span>
      </p>
      <p className="flex items-center gap-2 text-gray-700">
        <FaGlobe className="text-orange-500" /> <span>{website}</span>
      </p>
    </div>
  );
};

export default UserInfo;
