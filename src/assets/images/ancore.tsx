import * as React from "react";

const SvgIcon: React.FC<React.SVGProps<SVGElement>> = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12.5 2.5h5v5M8.333 11.667 17.5 2.5M15 10.833v5a1.666 1.666 0 0 1-1.667 1.667H4.167A1.667 1.667 0 0 1 2.5 15.833V6.667A1.667 1.667 0 0 1 4.167 5h5"
    ></path>
  </svg>
);

export default SvgIcon;