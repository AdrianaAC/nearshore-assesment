import React from "react";

// Define the props for the FilterDropdown component
interface FilterDropdownProps {
  filterOptions: string[]; // Array of filter options
  onChange: (selected: string) => void; // Callback function when an option is selected
  label: string; // Label for the dropdown
}

// Functional component for the filter dropdown
const FilterDropdown: React.FC<FilterDropdownProps> = ({
  filterOptions,
  onChange,
  label,
}) => {
  return (
    <div className="filterDropdownContainer">
      {/* Label for the dropdown */}
      <label>{label}</label>

      {/* Dropdown select element */}
      <select title="filter" onChange={(e) => onChange(e.target.value)}>
        {/* Default option prompting user to filter by the label */}
        <option value="">Filter by {label}</option>

        {/* Map through filterOptions to create an option element for each */}
        {filterOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
