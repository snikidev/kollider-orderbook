import { SVGProps } from "react";
import IconBase from "./IconBase";

const BTCIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <IconBase {...props}>
      <path
        d="M8.75 6.75V12M8.75 6.75H14.3655C17.2189 6.75 18.2926 10.4845 15.875 12M8.75 6.75H6.75M8.75 12V17.25M8.75 12H15.875M8.75 17.25H14.3655C17.2189 17.25 18.2926 13.5155 15.875 12M8.75 17.25H6.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M10.75 6.5V4.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M14.25 6.5V4.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M14.25 19.25V17.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M10.75 19.25V17.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </IconBase>
  );
};

export default BTCIcon;
