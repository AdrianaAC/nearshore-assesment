import React, { useState } from "react";
import DataTable from "./dataTable";
import FilterDropdown from "./filtersDropDown";
import data from "./data.json"; 

const App: React.FC = () => {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const filteredData = data.filter((row) => {
    return (
      (!selectedMake || row.make === selectedMake) &&
      (!selectedYear || row.year === parseInt(selectedYear))
    );
  });

  return (
    <div>
      <h1>Filterable Data Table</h1>
      <FilterDropdown
        filterOptions={["Lamborghini", "Porsche", "Dodge"]}
        onChange={setSelectedMake}
        label="Filter by Make"
      />
      <FilterDropdown
        filterOptions={["2017", "2018", "2014", "2012"]}
        onChange={setSelectedYear}
        label="Filter by Year"
      />
      <DataTable data={filteredData} />
    </div>
  );
};

export default App;
