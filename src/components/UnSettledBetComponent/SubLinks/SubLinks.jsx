import React from "react";
import { Link } from "react-router-dom";

function SubLinks() {
  return (
    <div className="unSettledLink">
      <Link className="subLink" to="/">
        Matched
      </Link>
      <Link className="subLink" to="/">
        Un-Matched
      </Link>
      <Link className="subLink" to="/">
        Deleted
      </Link>
    </div>
  );
}

export default SubLinks;
