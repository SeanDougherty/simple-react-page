import ProjectFrame from "../Utility/ProjectFrame";
import { ReactComponent as ICON } from "../../resources/sign.svg";
import { ReactComponent as Python } from "../../resources/python.svg";
import { ReactComponent as Charm } from "../../resources/charm.svg";
import { ReactComponent as PBC } from "../../resources/pbc.svg";
// import pbc from "../../resources/pbc.png";
// <img src={geni} alt="GENI testbed" />,

const title = "Practical Proxy Signature";
const description =
  "A python implementation of a proxy signature scheme that leverages the Schnorr signature algorithm for the steps of signature and verification.";

const ProxySignature = (props) => {
  return (
    <ProjectFrame
      title={title}
      description={description}
      icon={<ICON />}
      components={[<Python />, <Charm />, <PBC />]}
      componentTips={[
        "Python",
        "Charm Crypto Library",
        "Pairing Based Crypto Library",
      ]}
      link={
        "https://github.com/seandough3rty/A-Practical-Proxy-Signature-Scheme"
      }
    />
  );
};

export default ProxySignature;
