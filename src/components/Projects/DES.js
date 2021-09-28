import ProjectFrame from "../Utility/ProjectFrame";
import { ReactComponent as ICON } from "../../resources/des.svg";
import { ReactComponent as CPLUSPLUS } from "../../resources/cplusplus.svg";

const title = "myDES";
const description =
  "This is an implementation of the Date Encryption Standard symmetric key algorithm. Complete with padding and key/iv generation.";

const DES = (props) => {
  return (
    <ProjectFrame
      title={title}
      description={description}
      icon={<ICON />}
      components={[<CPLUSPLUS />]}
      link={"https://github.com/seandough3rty/myDES"}
    />
  );
};

export default DES;
