import ProjectFrame from "../Utility/ProjectFrame";
import { ReactComponent as ICON } from "../../resources/cipher.svg";

const title = "Cipher Breaker";
const description =
  "A C++ program to aid in the breaking of Substitution Ciphers.";

const CipherBreaker = (props) => {
  return (
    <ProjectFrame
      title={title}
      description={description}
      icon={<ICON />}
      components={[<ICON />, <ICON />, <ICON />]}
    />
  );
};

export default CipherBreaker;
