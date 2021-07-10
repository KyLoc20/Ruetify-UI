import * as React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import clsx from "clsx";
//todo use transform: scale(1.2) to set the size
const Component = styled("div")`
  transform: scale(1.2);
  svg {
    stroke-dasharray: 100 2000; //v1 is dash length v2 is space length(v2>=circle length=>only 1 dash)
  }
  svg.outer-static {
    transform: rotate(270deg);
  }
  .inner-static {
    transition: stroke-dasharray 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  svg.outer-animate {
    animation: rotate 1.4s linear infinite;
  }
  .inner-animate {
    animation: dash 1.4s ease-in-out infinite;
  }
  @keyframes dash {
    from {
      stroke-dashoffset: 100;
    }
    50% {
      stroke-dashoffset: -20;
    }
    to {
      stroke-dashoffset: -125;
    }
  }
  @keyframes rotate {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
export default function CircularAnimation(props) {
  const computedSize = () => {
    return { width: `${props.size}px`, height: `${props.size}px` };
  };
  const computedStrokeShape = () => {
    if (props.determinate) {
      //static shape
      const baseCircleLength = 127;
      return `${(props.progress / 100) * baseCircleLength} 2000`;
    }
    //infinite animation
    else return "100 2000";
  };
  return (
    <Component className="circular-animation" style={{ ...computedSize() }}>
      <svg
        viewBox="0 0 60 60"
        className={clsx([props.determinate ? "outer-static" : "outer-animate"])}
      >
        <circle
          className={clsx([
            props.determinate ? "inner-static" : "inner-animate",
          ])}
          cx={30}
          cy={30}
          r={props.size}
          fill="none"
          stroke={props.color}
          strokeWidth={props.strokeWidth}
          strokeDasharray={computedStrokeShape()}
        ></circle>
      </svg>
    </Component>
  );
}
CircularAnimation.propTypes = {
  strokeWidth: PropTypes.number, //stroke width
  color: PropTypes.string, //stroke color
  size: PropTypes.number, //stroke radius
  determinate: PropTypes.bool, //if true it is static
  progress: PropTypes.number, //static shape
};
CircularAnimation.defaultProps = {
  strokeWidth: 3.6,
  color: "currentColor",
  size: 16,
  determinate: false,
  progress: 87,
};
