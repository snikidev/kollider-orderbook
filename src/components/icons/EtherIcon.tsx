import { SVGProps } from "react";
import IconBase from "./IconBase";

const EtherIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <IconBase {...props}>
      <path
        d="M5.75 10L12 4.75L18.25 10M5.75 10L12 19.25L18.25 10M5.75 10L12 12.25L18.25 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </IconBase>
  );
};

export default EtherIcon;
