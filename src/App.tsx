import React, { useEffect, useState, useMemo } from "react";
import DataTable from "./dataTable";
import FilterDropdown from "./filtersDropDown";
import data from "./data.json";

const App: React.FC = () => {
  const [selectedMake, setSelectedMake] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [selectedTransmission, setSelectedTransmission] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // States to hold the unique filter options
  const [makeOptions, setMakeOptions] = useState<string[]>([]);
  const [yearOptions, setYearOptions] = useState<string[]>([]);
  const [transmissionOptions, setTransmissionOptions] = useState<string[]>([]);

  // Extract unique filter options from data.json when the component mounts
  useEffect(() => {
    const uniqueMakes = Array.from(new Set(data.map((car) => car.make)));
    const uniqueYears = Array.from(new Set(data.map((car) => car.year.toString())));
    const uniqueTransmissions = Array.from(new Set(data.map((car) => car.transmission)));

    setMakeOptions(uniqueMakes);
    setYearOptions(uniqueYears);
    setTransmissionOptions(uniqueTransmissions);
  }, []);

  // Function to reset filters
  const resetFilters = () => {
    setSelectedMake("");
    setSelectedYear("");
    setSelectedTransmission("");
    setSearchTerm("");
  };

  // Memorize filtered data to avoid unnecessary recalculations
  const filteredData = useMemo(() => {
    return data.filter((row) => {
      const matchesMake = !selectedMake || row.make === selectedMake;
      const matchesYear = !selectedYear || row.year.toString() === selectedYear;
      const matchesTransmission = !selectedTransmission || row.transmission === selectedTransmission;
      const matchesSearchTerm = !searchTerm || row.model.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesMake && matchesYear && matchesTransmission && matchesSearchTerm;
    });
  }, [selectedMake, selectedYear, selectedTransmission, searchTerm]);

  return (
    <div>
      <h1>Find your car</h1>
      <div className="searchArea">
        <div className="searchContainer">
          <div className="searchText">
            <p className="searchTitle">Search your car</p>
            <p className="searchSubTitle">
              Search by model, year or transmission type.
            </p>
          </div>
          <input
            type="text"
            placeholder="Search your car"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filterArea">
          <FilterDropdown
            filterOptions={makeOptions}
            onChange={setSelectedMake}
            label="Make"
          />
          <FilterDropdown
            filterOptions={yearOptions}
            onChange={setSelectedYear}
            label="Year"
          />
          <FilterDropdown
            filterOptions={transmissionOptions}
            onChange={setSelectedTransmission}
            label="Transmission Type"
          />
          <button className="resetButton" onClick={resetFilters}>
            Reset Filters
          </button>
        </div>
      </div>
      <DataTable data={filteredData} />
    </div>
  );
};

export default App;
