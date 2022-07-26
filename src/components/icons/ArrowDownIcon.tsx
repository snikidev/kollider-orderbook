import { SVGProps } from "react";
import IconBase from "./IconBase";

const EtherIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <IconBase {...props}>
      <path
        d="M12 15.25L16.25 9.75H7.75L12 15.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </IconBase>
  );
};

export default EtherIcon;
