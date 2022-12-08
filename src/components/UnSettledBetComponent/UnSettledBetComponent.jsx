import React, { useEffect, useState } from "react";
import AdvanceSearch from "../common/AdvanceSearch";
import CustomTable from "../common/CustomTable";

function UnSettledBetComponent() {
  const [columns, setColumns] = useState([]);
  const [defaultSorted, setDefaultSorted] = useState([]);
  const [data, setData] = useState([]);
  const [selectOptions, setSelectOptions] = useState([]);
  const pageSize = 5;
  const customFormat = (cell, row) => {
    const status = row.status;
    let img = (
      <img
        src="/assets/icons/up-arrow.svg"
        className="rotate me-2"
        alt="loss"
      />
    );
    if (status === "profit") {
      img = (
        <img src="/assets/icons/up-arrow.svg" className="me-2" alt="profit" />
      );
    }
    return (
      <div>
        {img}
        {cell}
      </div>
    );
  };
  useEffect(() => {
    setColumns([
      { dataField: "bet", text: "Bet", sort: true },
      {
        dataField: "profit_loss",
        text: "Profit/ Loss",
        sort: true,
        formatter: customFormat,
      },
    ]);

    setDefaultSorted([
      {
        dataField: "bet",
        order: "desc",
      },
    ]);
    setData([
      { id: "1", bet: "20000", profit_loss: "0.02400400", status: "loss" },
      { id: "2", bet: "20000", profit_loss: "0.02400400", status: "profit" },
      { id: "3", bet: "20000", profit_loss: "0.02400400", status: "loss" },
      { id: "4", bet: "20000", profit_loss: "0.02400400", status: "profit" },
      { id: "5", bet: "20000", profit_loss: "0.02400400", status: "profit" },
    ]);
    setSelectOptions([
      {
        value: "20-20 Dragon Tiger",
        label: "20-20 Dragon Tiger",
      },
    ]);
  }, []);
  return (
    <>
      <div className="container profitLossDiv">
        <AdvanceSearch isSelectSearch={true} selectOptions={selectOptions} />
        {columns.length ? (
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

export default UnSettledBetComponent;
