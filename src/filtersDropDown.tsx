import React from "react";

interface FilterDropdownProps {
  filterOptions: string[];
  onChange: (selected: string) => void;
  label: string;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ filterOptions, onChange, label }) => {
  return (
    <div className="filterDropdownContainer">
      <label>{label}</label>
      <select title="filter" onChange={(e) => onChange(e.target.value)}>
        <option value="">Filter by {label}</option>
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