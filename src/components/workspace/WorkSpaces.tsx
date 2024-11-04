import { Accordion } from 'rsuite';
import { ITasks } from "../../types/alltasks";

const WorkSpaces:React.FC<ITasks> = ({list}) => {
  return (
<Accordion>
<Accordion.Panel header={list.title}>
    <p>{list.staus}</p>

</Accordion.Panel>

</Accordion>
)
}

export default WorkSpaces