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
        {username ? (
          <>
            <FaUser className="text-blue-500" /> <span>{username}</span>
          </>
        ) : (
          <span className="text-gray-500">-</span>
        )}
      </p>
      <p className="flex items-center gap-2 text-gray-700 mb-2">
          {email ? (
          <>
            <FaEnvelope className="text-green-500" /> <span>{email}</span>
          </>
        ) : (
          <span className="text-gray-500">-</span>
        )}
      </p>
      <p className="flex items-center gap-2 text-gray-700 mb-2">
        {phone ? (
          <>
            <FaPhone className="text-purple-500" /> <span>{phone}</span>
          </>
        ) : (
          <span className="text-gray-500">-</span>
        )}
      </p>
      <p className="flex items-center gap-2 text-gray-700">
        {website ? (
          <>
            <FaGlobe className="text-orange-500" /> <span>{website}</span>
          </>
        ) : (
          <span className="text-gray-500">-</span>
        )}
      </p>
    </div>
  );
};

export default UserInfo;
