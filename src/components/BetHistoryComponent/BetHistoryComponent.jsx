import axios from "axios";
import React, { useEffect, useState } from "react";
import AdvanceSearch from "../common/AdvanceSearch";
import CustomTable from "../common/CustomTable";
import "./betHistory.scss";

function BetHistoryComponent() {
  const [fetching, setFetching] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [columns, setColumns] = useState([]);
  const [defaultSorted, setDefaultSorted] = useState([]);
  const [data, setData] = useState([]);
  const pageSize = 5;
  const formatCell = (cell, row, rowIndex, formatExtraData) => {
    return (
      <div style={{ opacity: !row.Profit ? 0.3 : 1 }}>
        {row.Profit ? "" : "-"}
        {row.result_amount} <img src="/assets/icons/coins.svg" alt="" />
      </div>
    );
  };
  const fetchHistory = () => {
    const formatedStartDate = startDate.toISOString().split("T")[0];
    const formatedEndDate = endDate.toISOString().split("T")[0];
    setFetching(true);
    const apiURL = `${process.env.REACT_APP_BACKEND_API}/game/history/`;
    axios({
      method: "get",
      url: apiURL,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
      params: {
        date_1: formatedStartDate,
        date_2: formatedEndDate,
      },
    })
      .then((res) => {
        setFetching(false);
        const { data = [] } = res;
        setData(data);
        console.log("Hostory:::", data);
      })
      .catch((err) => {
        console.log("Error while fetching history", err);
        setFetching(false);
      });
  };
  useEffect(() => {
    setColumns([
      { dataField: "Event Name", text: "Game", sort: true },
      { dataField: "Amount", text: "Payout", sort: true },
      {
        dataField: "profit_loss",
        text: "Profit/ Loss",
        sort: false,
        formatter: formatCell,
      },
    ]);

    setDefaultSorted([
      {
        dataField: "game",
        order: "desc",
      },
    ]);
    fetchHistory();
  }, []);

  return (
    <>
      <div className="container betHistoryDiv">
        <AdvanceSearch
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          handleSubmit={fetchHistory}
          fetching={fetching}
        />
        {data.length > 0 && columns.length ? (
          <CustomTable
            data={data}
            columns={columns}
            defaultSorted={defaultSorted}
            keyField="game"
            pageSize={pageSize}
          />
        ) : (
          <>
            <h1 className="text-center">No data</h1>
            <p className="text-center">Please select different date range.</p>
          </>
        )}
      </div>
    </>
  );
}

export default BetHistoryComponent;
