import { useState, useRef, useEffect } from "react";
import { createUseStyles } from "react-jss";

const FadeIntoView = (props) => {
  const delay = props.delay ? props.delay + "ms" : "";
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  const classes = useStyles(delay);
  return (
    <div
      className={`${classes.fadeIn} ${isVisible ? "visible" : ""}`}
      ref={domRef}>
      {props.children}
    </div>
  );
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

export default FadeIntoView;
