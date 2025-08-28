interface IProps {
    name?: string;
    catchPhrase?: string;
    bs?: string;
  }
  
  const CompanyInfo = ({ name, catchPhrase, bs }: IProps) => {
    return (
      <div>
        <p className="text-gray-600 font-semibold">{name}</p>
        <p className="text-gray-600 italic">{catchPhrase}</p>
        <p className="text-gray-600">{bs}</p>
      </div>
    );
  };
  
  export default CompanyInfo;
  