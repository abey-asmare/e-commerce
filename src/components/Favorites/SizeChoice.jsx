import PropTypes from "prop-types";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";


function SizeChoice({ size }) {
    return (
      <ToggleGroup type="multiple">
        <ToggleGroupItem
          value={size}
          className="border border-gray-400 py-3 h-10 data-[state=off]:bg-transparent data-[state=off]:text-gray-600 hover:text-black hover:border-black px-6 rounded-none text-base font-semibold data-[state=on]:bg-[#1A1A1D] data-[state=on]:text-white"
        >
          {size}
        </ToggleGroupItem>
      </ToggleGroup>
    );
  }
  
  SizeChoice.propTypes = {
    size: PropTypes.string,
  };

  export default SizeChoice