import React from "react";
import { useState, useRef, useEffect } from "react";
import { createUseStyles } from "react-jss";

/* Similar to FadeIntoView, however instead of wrapping the
 * child in a div that controls the animation. The FadeIn
 * animation classes are directly given to the child component.
 * Accepts only a SINGLE child.
 */
const ShimmyOnViewThin = ({ children, ...props }) => {
  const delay = props.delay ? props.delay + "ms" : "";
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  const classes = useStyles(delay);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    });
    const domRefCurrent = domRef.current;
    observer.observe(domRefCurrent);
    return () => observer.unobserve(domRefCurrent);
  }, []);

  if (React.Children.only(children)) {
    return React.cloneElement(children, {
      className: `${children.props.className} ${classes.shimmy} ${
        isVisible ? "visible" : ""
      }`,
      ref: domRef,
    });
  } else {
    return (
      <div
        className={`${classes.shimmy} ${isVisible ? "visible" : ""}`}
        ref={domRef}>
        {props.children}
      </div>
    );
  }
};

const useStyles = createUseStyles((theme) => ({
  shimmy: (delay) => ({
    "&.visible": {
      animationName: "$shake",
      animationDuration: "0.3s",
      animationIterationCount: "2",
      animationTimingFunction: "ease",
      animationDelay: delay,
    },
  }),
  "@keyframes shake": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "25%": {
      transform: "rotate(5deg)",
    },
    "50%": {
      transform: "rotate(0deg)",
    },
    "75%": {
      transform: "rotate(-5deg)",
    },
    "100%": {
      transform: "rotate(0deg)",
    },
  },
}));

export default ShimmyOnViewThin;
