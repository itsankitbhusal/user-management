interface IProps {
  name?: string;
  catchPhrase?: string;
  bs?: string;
}

const CompanyInfo = ({ name, catchPhrase, bs }: IProps) => {
  return (
    <div>
      {name ? (
        <p className="text-gray-600 font-semibold">{name}</p>
      ) : (
        <span className="text-gray-500">-</span>
      )}
      {catchPhrase ? (
        <p className="text-gray-600 italic">{catchPhrase}</p>
      ) : (
        <span className="text-gray-500">-</span>
      )}
      {bs ? (
        <p className="text-gray-600">{bs}</p>
      ) : (
        <span className="text-gray-500">-</span>
      )}
    </div>
  );
};

export default CompanyInfo;
