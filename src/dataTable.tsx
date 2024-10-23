import React, { useState } from "react";
import "./App.css";

interface DataTableProps {
  data: any;
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const [tableStyle, setTableStyle] = useState("zebra");

  const toggleTableStyle = () => {
    setTableStyle((prevStyle) =>
      prevStyle === "zebra" ? "inverse-zebra" : "zebra"
    );
  };

  return (
    <div className="table-container">
      <table className={tableStyle}>
        <thead className="tableHead">
          <tr>
            <th>Model</th>
            <th>Make</th>
            <th>Year</th>
            <th>Transmission</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row: any, index: number) => (
            <tr key={index}>
              <td>{row.model}</td>
              <td>{row.make}</td>
              <td>{row.year}</td>
              <td>{row.transmission}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="styleToggle" onClick={toggleTableStyle}>
        Toggle Table Style
      </button>
    </div>
  );
};

export default DataTable;
