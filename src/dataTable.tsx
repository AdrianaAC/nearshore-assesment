import React, { useEffect, useState } from "react";
import "./App.css";

interface CarData {
  model: string;
  make: string;
  year: number;
  transmission: string;
}

interface DataTableProps {
  data: CarData[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const [tableStyle, setTableStyle] = useState("zebra");
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  useEffect(() => {
    const initialExpandedRows = data.map((_, index) => index);
    setExpandedRows(initialExpandedRows);
  }, [data]);

  const toggleTableStyle = () => {
    setTableStyle((prevStyle) =>
      prevStyle === "zebra" ? "inverse-zebra" : "zebra"
    );
  };

  const toggleRow = (index: number) => {
    setExpandedRows((prev) => {
      if (prev.includes(index)) {
        return prev.filter((rowIndex) => rowIndex !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <div className="table-container">
      <table className={tableStyle}>
        <thead className="tableHead">
          <tr>
            <th className="expandCol"></th>
            <th>Model</th>
            <th>Make</th>
            <th>Year</th>
            <th>Transmission</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            // Check if the current row is expanded
            const isExpanded = expandedRows.includes(index);
            return (
              <React.Fragment key={index}>
                <tr>
                  <td>
                    <button
                      onClick={() => toggleRow(index)}
                      className="expandCol"
                    >
                      {/* Show the appropriate icon based on whether the row is expanded */}
                      {isExpanded ? "▼" : "►"}
                    </button>
                  </td>
                  {/* Conditionally render row details based on whether the row is expanded */}
                  <td>{isExpanded ? row.model : ""}</td>
                  <td>{isExpanded ? row.make : ""}</td>
                  <td>{isExpanded ? row.year : ""}</td>
                  <td>{isExpanded ? row.transmission : ""}</td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
      {/* Button to toggle the table style */}
      <button className="styleToggle" onClick={toggleTableStyle}>
        Toggle Table Style
      </button>
    </div>
  );
};

export default DataTable;
