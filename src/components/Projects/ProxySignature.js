import ProjectFrame from "../Utility/ProjectFrame";
import { ReactComponent as ICON } from "../../resources/sign.svg";

const title = "Practical Proxy Signature";
const description =
  "A python implementation of a proxy signature scheme that leverages the Schnorr signature algorithm for the steps of signature and verification.";

const ProxySignature = (props) => {
  return (
    <ProjectFrame
      title={title}
      description={description}
      icon={<ICON />}
      components={[<ICON />, <ICON />, <ICON />]}
    />
  );
};

export default ProxySignature;
