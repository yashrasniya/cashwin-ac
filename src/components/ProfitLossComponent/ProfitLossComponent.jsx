import axios from "axios";
import React, { useEffect, useState } from "react";
import AdvanceSearch from "../common/AdvanceSearch";
import CustomTable from "../common/CustomTable";
import "./profitLoss.scss";
function ProfitLossComponent() {
  const [fetching, setFetching] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [columns, setColumns] = useState([]);
  const [defaultSorted, setDefaultSorted] = useState([]);
  const [data, setData] = useState([]);
  // const [selectOptions, setSelectOptions] = useState([]);
  const pageSize = 5;
  const customFormat = (cell, row) => {
    // const status = row.status;
    const status = row.result_status ? "profit" : "loss";
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
        {row.result_amount}
      </div>
    );
  };

  const fetchProfitLoss = () => {
    const formatedStartDate = startDate.toISOString().split("T")[0];
    const formatedEndDate = endDate.toISOString().split("T")[0];
    setFetching(true);
    const apiURL = `${process.env.REACT_APP_BACKEND_API}/game/profit_loss/`;
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
      { dataField: "Amount", text: "Bet", sort: true },
      {
        dataField: "result_status",
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
    fetchProfitLoss();
    // setData([
    //   { id: "1", bet: "20000", profit_loss: "0.02400400", status: "loss" },
    //   { id: "2", bet: "20000", profit_loss: "0.02400400", status: "profit" },
    //   { id: "3", bet: "20000", profit_loss: "0.02400400", status: "loss" },
    //   { id: "4", bet: "20000", profit_loss: "0.02400400", status: "profit" },
    //   { id: "5", bet: "20000", profit_loss: "0.02400400", status: "profit" },
    // ]);
    // setSelectOptions([
    //   {
    //     value: "20-20 Dragon Tiger",
    //     label: "20-20 Dragon Tiger",
    //   },
    // ]);
  }, []);
  return (
    <>
      <div className="container profitLossDiv">
        <AdvanceSearch
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          handleSubmit={fetchProfitLoss}
          fetching={fetching}
        />
        {data.length > 0 && columns.length ? (
          <CustomTable
            data={data}
            columns={columns}
            defaultSorted={defaultSorted}
            keyField="id"
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

export default ProfitLossComponent;
