import { useState } from "react";
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
      <div className={classes.title} onClick={expandHandler}>
        {title}
        <div className={classes.expandContainer}>
          <DownArrow className={isExpanded ? "expanded" : ""} />
        </div>
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
    height: 54,
  },
  expandContainer: {
    backgroundColor: theme.colorAccent,
    bottom: "-19px",
    position: "relative",
    alignSelf: "center",
    marginRight: 16,
    height: 30,
    padding: [0, "1rem"],
    borderRadius: [[10, 10, 0, 0]],
    cursor: "pointer",
    "& > svg": {
      width: 20,
      overflow: "visible",
      transition: [["transform", "2s", "ease"]],
      "&.expanded": {
        transform: "rotate(180deg)",
      },
      "& > g > path": {
        fill: [[theme.colorDarkest], "!important"],
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
