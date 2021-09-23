import { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { ReactComponent as DownArrow } from "../../resources/down-arrow.svg";

const Collapsible = ({ children, ...props }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const classes = useStyles(isExpanded);
  const title = children[0];
  const body = children.slice(1);

  const expandHandler = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <div className={classes.collapsible}>
      <div className={classes.title}>
        {title}
        <DownArrow
          className={isExpanded ? "expanded" : ""}
          onClick={expandHandler}
        />
      </div>
      <div className={`${classes.body} ${isExpanded ? "expanded" : ""}`}>
        {body}
      </div>
      <hr />
    </div>
  );
};

const useStyles = createUseStyles((theme) => ({
  collapsible: {
    "& hr": {
      margin: "0 1rem 0.5rem 0",
      borderTop: [[2, "solid", theme.colorAccent]],
    },
    "& > hr:last-of-type": {
      marginTop: 0,
    },
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: "0.5rem",
    "& > svg": {
      alignSelf: "center",
      width: 20,
      padding: [0, "7vw"],
      overflow: "visible",
      transition: [["transform", "2s", "ease"]],
      "&.expanded": {
        transform: "rotate(180deg)",
      },
      "& > g > path": {
        fill: [[theme.colorPrimary], "!important"],
      },
    },
  },
  body: {
    overflow: "hidden",
    maxHeight: 0,
    transition: [["max-height", "5s", "ease"]],
    "&.expanded": {
      maxHeight: "150vh",
    },
  },
}));

export default Collapsible;
