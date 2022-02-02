import ProjectFrame from "../Utility/ProjectFrame";
import { ReactComponent as ICON } from "../../resources/aoc21.svg";
import { ReactComponent as CPLUSPLUS } from "../../resources/cplusplus.svg";

const title = "Advent of Code 2021";
const description =
  "A collection of my solutions for the 2021 Advent Of Code Challenge. See my submodule AdventOfCodeUtils for a fun little QoL service I wrote related to the AoC challenges.";

const AdventOfCode21 = (props) => {
  return (
    <ProjectFrame
      title={title}
      description={description}
      icon={<ICON />}
      components={[<CPLUSPLUS />]}
      componentTips={["C++"]}
      link={"https://github.com/seandough3rty/AdventOfCode2021"}
    />
  );
};

export default AdventOfCode21;
