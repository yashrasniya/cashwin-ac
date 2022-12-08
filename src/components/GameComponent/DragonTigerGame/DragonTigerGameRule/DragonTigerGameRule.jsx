import React from "react";
import "./dragonRule.scss";
function DragonTigerGameRule() {
  return (
    <div className="dragonTigerRuleDiv">
      <ul className="points">
        <li>
          In the Dragon Tiger game two hands are dealt; one for the Dragon and
          another for the Tiger. The player bets which will win, or if they will
          tie.
        </li>
        <li>
          The winning hand is the hand with the highest ranking card. If the
          Dragon and Tiger hands have the sameranking, the round of play is a
          Tie. There are ranking of suits in the game of Dragon Tiger. The game
          is played with eight decks of cards.
        </li>
        <li>
          The winning hand is the hand with the highest ranking card. If the
          Dragon and Tiger hands have the same ranking, the round of play is a
          Tie. There are ranking of suits in the game of Dragon Tiger. The game
          is played with eight decks of cards.
        </li>
        <li>
          The ranking of cards is, from lowest to highest: Ace, 2, 3, 4, 5, 6,
          7,8, 9, 10, Jack, Queen and King when Ace is “1” and King is “13”.
        </li>
        <li>
          At the end of the game winnings payout as follows:{" "}
          <table className="ruleTable">
            <tbody>
              <tr>
                <td>Dragon</td>
                <td>1:1</td>
              </tr>
              <tr>
                <td>Tiger</td>
                <td>1:1</td>
              </tr>
              <tr>
                <td>Tie</td>
                <td>50:1</td>
              </tr>
              <tr>
                <td>Pair</td>
                <td>11:1</td>
              </tr>
            </tbody>
          </table>
        </li>
        <li>
          On same card with different suit, Winner will be declare based on
          below winning suit sequence.
          <div className="ruleCards">
            <div className="d-flex flex-column text-center me-3">
              <div className="ruleCard spade">
                <span>A</span>
                <img src="/assets/icons/dragonRule/spade.svg" alt="" />
              </div>
              <span className="rank">
                1<sup>st</sup>
              </span>
            </div>
            <div className="d-flex flex-column text-center me-3">
              <div className="ruleCard heart">
                <span className="text-danger">A</span>
                <img src="/assets/icons/dragonRule/heart.svg" alt="" />
              </div>
              <span className="rank">
                2<sup>nd</sup>
              </span>
            </div>
            <div className="d-flex flex-column text-center me-3">
              <div className="ruleCard club">
                <span>A</span>
                <img src="/assets/icons/dragonRule/club.svg" alt="" />
              </div>
              <span className="rank">
                3<sup>rd</sup>
              </span>
            </div>
            <div className="d-flex flex-column text-center me-3">
              <div className="ruleCard diamond">
                <span className="text-danger">A</span>
                <img src="/assets/icons/dragonRule/diamond.svg" alt="" />
              </div>
              <span className="rank">
                4<sup>th</sup>
              </span>
            </div>
          </div>
        </li>
        <li>
          In the case of a Tie, Bets on Dragon & Tiger will lose the amount.
        </li>
      </ul>
    </div>
  );
}

export default DragonTigerGameRule;
