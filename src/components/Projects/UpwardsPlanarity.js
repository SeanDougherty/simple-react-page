import ProjectFrame from "../Utility/ProjectFrame";
import { ReactComponent as ICON } from "../../resources/graph.svg";

const title = "Upwards Planar Graph Embedding";
const description =
  "UPGE uses the OGDF (Open Graph Drawing Framework) C++ library to embed input graphs as upward-planar graphs.";

const UpwardsPlanarity = (props) => {
  return (
    <ProjectFrame
      title={title}
      description={description}
      icon={<ICON />}
      components={[<ICON />, <ICON />, <ICON />]}
    />
  );
};

export default UpwardsPlanarity;
