import React from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import PropTypes from "prop-types";
import "./customTable.scss";
function CustomTable(props) {
  const { data, columns, defaultSorted, keyField, pageSize } = props;
  const pagination = paginationFactory({
    page: 1,
    sizePerPage: pageSize,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  });
  return (
    <BootstrapTable
      wrapperClasses="tableDiv"
      classes="customTable"
      headerClasses="headerDiv"
      headerWrapperClasses="customHead"
      bodyClasses="tableBody"
      rowClasses="tableBodyRow"
      bootstrap4
      keyField={keyField}
      data={data}
      columns={columns}
      defaultSorted={defaultSorted}
      pagination={pagination}
      bordered={true}
    />
  );
}

export default CustomTable;

CustomTable.prototype = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  defaultSorted: PropTypes.array.isRequired,
  keyField: PropTypes.string.isRequired,
  pageSize: PropTypes.number.isRequired,
};
