import { FaRegFlag } from "react-icons/fa";

interface TFlagProps {
  priority: "low"|"high"|"emergency"|"intermediate";

}

const Flag: React.FC<TFlagProps> = ({ priority }) => {
  const color=(priority==="low")&&"lime-primary"||priority==="high"&&"yellow-primary"||priority==="emergency"&&"red-primary"||priority==="intermediate"&&"cyan-primary"
  const className = `text-${color}`;

  return (
    <div className={className}>
      <FaRegFlag />
    </div>
  );
};

export default Flag;
