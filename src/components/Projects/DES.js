import ProjectFrame from "../Utility/ProjectFrame";
import { ReactComponent as ICON } from "../../resources/des.svg";

const title = "myDES";
const description =
  "This is an implementation of the Date Encryption Standard symmetric key algorithm. Complete with padding and key/iv generation.";

const DES = (props) => {
  return (
    <ProjectFrame
      title={title}
      description={description}
      icon={<ICON />}
      components={[<ICON />, <ICON />, <ICON />]}
    />
  );
};

export default DES;
