import ProjectFrame from "../Utility/ProjectFrame";
import { ReactComponent as ICON } from "../../resources/cipher.svg";
import { ReactComponent as CPLUSPLUS } from "../../resources/cplusplus.svg";

const title = "Cipher Breaker";
const description =
  "A C++ program to aid in the breaking of Substitution Ciphers.";

const CipherBreaker = (props) => {
  return (
    <ProjectFrame
      title={title}
      description={description}
      icon={<ICON />}
      components={[<CPLUSPLUS />]}
      link={"https://github.com/seandough3rty/Substitution-Cipher-Breaker"}
    />
  );
};

export default CipherBreaker;
