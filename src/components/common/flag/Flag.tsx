import { FaRegFlag } from "react-icons/fa";

interface TFlagProps {
  priority: "low"|"high"|"emergency"|"intermediate";
  
}

const Flag: React.FC<TFlagProps> = ({ priority }) => {
  const className = `text-${priority}`;

  return (
    <div className={className}>
      <FaRegFlag />
    </div>
  );
};

export default Flag;
