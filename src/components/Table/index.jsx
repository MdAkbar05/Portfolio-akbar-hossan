import React from "react";

const Table = ({ head, data }) => {
  return (
    <div className="border p-2 max-w-40 min-w-32 ">
      <div className="border-b">
        <div className="font-medium">{head}</div>
      </div>
      <div>
        <div className="font-thin">{data}</div>
      </div>
    </div>
  );
};

export default Table;
