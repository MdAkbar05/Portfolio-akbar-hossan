// CircleProgressBar.js
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./CircleProgressBar.css";

const CircleProgressBar = ({ fillValue, strokeColor, size }) => {
  const [progress, setProgress] = useState(0);
  const stroke = 5;
  const normalizedRadius = size / 2 - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;

  useEffect(() => {
    const incrementProgress = () => {
      setProgress((prev) => {
        if (prev >= fillValue) return fillValue;
        return prev + 1;
      });
    };

    const interval = setInterval(incrementProgress, 50);
    return () => clearInterval(interval);
  }, [fillValue]);

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg height={size} width={size}>
      <circle
        stroke="black"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        stroke={strokeColor}
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={size / 2}
        cy={size / 2}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        fontSize={`${size / 4}px`}
        fill="white"
      >
        {`${progress}%`}
      </text>
    </svg>
  );
};

CircleProgressBar.propTypes = {
  fillValue: PropTypes.number.isRequired,
  strokeColor: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default CircleProgressBar;
