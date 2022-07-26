import { FC } from "react";
import ReactDropdown, { Option } from "react-dropdown";
import { ArrowDownIcon } from "../";

interface Props {
  options: Option[];
  onChange: (arg: Option) => void;
  defaultOption?: string;
  Icon: FC;
}

const Dropdown = ({ onChange, options, defaultOption, Icon }: Props) => {
  return (
    <div className="border border-cyan-300 inline-block rounded-xl px-3 py-2 pr-1 mx-2">
      <div className="flex items-center">
        <Icon />
        <ReactDropdown
          options={options}
          onChange={onChange}
          value={defaultOption}
          placeholder="Select your pair"
          className="relative overflow-visible ml-3 mr-2"
          menuClassName="text-left absolute top-10 bg-slate-900 cursor-pointer"
          controlClassName="flex items-center"
          arrowClassName="ml-2"
          arrowClosed={<ArrowDownIcon />}
          arrowOpen={<ArrowDownIcon className="rotate-180" />}
        />
      </div>
    </div>
  );
};

export default Dropdown;
