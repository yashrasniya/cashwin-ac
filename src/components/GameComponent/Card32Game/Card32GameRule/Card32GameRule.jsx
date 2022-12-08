import React from "react";
import "./card32GameRule.scss";
function Card32GameRule() {
  const CardDiv = () => (
    <div className="cardGroup">
      <div className="cards card1">
        6
        <img src="/assets/icons/card32/spade.svg" alt="spade" />
      </div>
      <div className="cards card4">
        6
        <img src="/assets/icons/card32/diamond.svg" alt="club" />
      </div>
      <div className="cards card3">
        6
        <img src="/assets/icons/card32/club.svg" alt="club" />
      </div>
      <div className="cards card2">
        6
        <img src="/assets/icons/card32/heart.svg" alt="heart" />
      </div>
    </div>
  );
  return (
    <div className="card32RuleDiv">
      <div className="firstDiv">
        <div className="row1">
          <div className="column">32 Cards</div>
          <div className="column">Value</div>
        </div>
        {[6, 7, 8, 9, 10, 11, 12, 13].map((point) => (
          <div className="row2">
            <CardDiv />
            <div className="points">{point} points</div>
          </div>
        ))}
      </div>
      <ul>
        <li>
          This is a value card game & Winning result will count on Highest cards
          total.
        </li>
        <li>
          There are total 4 players, every player have default prefix points.
          Default points will be consider as following table.
          <table className="ruleTable">
            <thead>
              <tr>
                <th colSpan={4}>Playing Game Rule:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Player 8 <br /> Points 8
                </td>
                <td>
                  Player 9 <br /> Points 9
                </td>
                <td>
                  Player 10 <br /> Points 10
                </td>
                <td>
                  Player 10 <br /> Points 11
                </td>
              </tr>
            </tbody>
          </table>
        </li>
        <li>
          In game, every player has to count sum of default points and their own
          opened card’s point.
        </li>
        <li>
          If in first level, the sum is same with more than one player, then
          that will be tie and winner tied players go for next level.
        </li>
        <li>
          This sum will go and go upto Single Player Highest Sum of Point.
        </li>
        <li>At last Highest Point Cards’s Player declare as a Winner.</li>
      </ul>
    </div>
  );
}

export default Card32GameRule;
