import ProjectFrame from "../Utility/ProjectFrame";
import { ReactComponent as ICON } from "../../resources/apecs.svg";

const title = "APECS";
const description =
  "An advanced access control framework for the Pervasive Edge Computing (PEC) environment, which allows legitimate users to utilize any available edge services without need for communication beyond t…";

const APECS = (props) => {
  return (
    <ProjectFrame
      title={title}
      description={description}
      icon={<ICON />}
      components={[<ICON />, <ICON />, <ICON />]}
    />
  );
};

export default APECS;
