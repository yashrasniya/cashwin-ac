import React, { useEffect, useState } from "react";
import AdvanceSearch from "../common/AdvanceSearch";
import CustomTable from "../common/CustomTable";
import "./transactionHistory.scss";
function TransactionHistoryComponent() {
  const [columns, setColumns] = useState([]);
  const [defaultSorted, setDefaultSorted] = useState([]);
  const [data, setData] = useState([]);
  const pageSize = 5;
  const statusFormatter = (cell, row, rowIndex, formatExtraData) => {
    let textColor = "text-success";
    if (cell < 0) {
      textColor = "text-danger";
    }
    return <div className={textColor}> {cell}</div>;
  };
  useEffect(() => {
    setColumns([
      { dataField: "game", text: "Game", sort: true },
      {
        dataField: "amount",
        text: "Amount",
        sort: true,
        formatter: statusFormatter,
      },
    ]);

    setDefaultSorted([
      {
        dataField: "game",
        order: "asc",
      },
    ]);
    setData([
      {
        id: "1",
        game: "20-20 Dragon Tiger",
        amount: "+5000",
      },
      { id: "2", game: "Lucky 7 - B", amount: "-500" },
      { id: "3", game: "32 Cards", amount: "-1500" },
      { id: "4", game: "20-20 Teenpatti", amount: "+2800" },
      { id: "5", game: "32 Cards", amount: "-2000" },
    ]);
  }, []);
  return (
    <>
      <div className="container transactionHistoryDiv">
        <AdvanceSearch />
        {data.length ? (
          <CustomTable
            data={data}
            columns={columns}
            defaultSorted={defaultSorted}
            keyField="id"
            pageSize={pageSize}
          />
        ) : (
          <h1>No data</h1>
        )}
      </div>
    </>
  );
}

export default TransactionHistoryComponent;
