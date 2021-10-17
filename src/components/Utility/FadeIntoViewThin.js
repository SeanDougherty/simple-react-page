import React from "react";
import { useState, useRef, useEffect } from "react";
import { createUseStyles } from "react-jss";

/* Similar to FadeIntoView, however instead of wrapping the
 * child in a div that controls the animation. The FadeIn
 * animation classes are directly given to the child component.
 * Accepts only a SINGLE child.
 */
const FadeIntoViewThin = ({ children, ...props }) => {
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
      className: `${children.props.className} ${classes.fadeIn} ${
        isVisible ? "visible" : ""
      }`,
      ref: domRef,
    });
  } else {
    return (
      <div
        className={`${classes.fadeIn} ${isVisible ? "visible" : ""}`}
        ref={domRef}>
        {props.children}
      </div>
    );
  }
};

const useStyles = createUseStyles((theme) => ({
  fadeIn: (delay) => ({
    opacity: 0,
    transform: "translateY(100%)",
    visibility: "hidden",
    transition: `opacity 0.6s ${delay} ease-out, transform 0.6s ${delay} ease-out`,
    willChange: "opacity, visibility",
    "&.visible": {
      opacity: 1,
      transform: "none",
      visibility: "visible",
    },
  }),
}));

export default FadeIntoViewThin;
