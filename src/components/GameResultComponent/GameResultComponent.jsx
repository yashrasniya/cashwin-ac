import React from "react";

function GameResultComponent(props) {
  const { data } = props;
  return (
    <div className="resultTableDiv">
      <table className="resultTable">
        <tbody>
          {data.map((d) => (
            <tr>
              <td>
                <span className="link" role="button">
                  {d.id}
                </span>
              </td>
              <td className="text-end">Winner-{d.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GameResultComponent;
