import React from "react";
import "./lucky7GameRule.scss";
function Lucky7GameRule() {
  const HighLowCard = ({ card }) => {
    return (
      <div className="position-relative eachCard">
        <span>{card}</span>
        <img src="/assets/icons/lucky7Rule/card.svg" alt="card-img" />
      </div>
    );
  };
  return (
    <div className="lucky7RuleDiv">
      <ul className="points">
        <li>
          Lucky 7 is a 8 deck playing cards game, total 8 * 52 = 416 cards.
        </li>
        <li>If the card is from ACE to 6, LOW Wins.</li>
        <li>If the card is from 8 to KING, HIGH Wins.</li>
        <li>
          If the card is 7, bets on high and low will lose 50% of the bet
          amount.
        </li>
      </ul>
      <hr />
      <div className="lowHighDiv">
        <div className="lowHighCard">
          <div className="d-flex flex-column justify-content-center align-items-center">
            Low
            <div className="gameCards">
              {["A", "2", "3", "4", "5", "6"].map((card) => (
                <HighLowCard card={card} />
              ))}
            </div>
          </div>
          <div className="gameCards">
            <HighLowCard card="7" />
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            High
            <div className="gameCards">
              {[8, 9, 10, "J", "Q", "K"].map((card) => (
                <HighLowCard card={card} />
              ))}
            </div>
          </div>
        </div>
        <div className="lowHighBtn">Payout 2.00</div>
      </div>
      <hr />
      <div className="oddEvenDiv">
        <div className="oddEvenCard">
          <div className="d-flex flex-column justify-content-center align-items-center">
            Odd
            <div className="gameCards">
              {["A", "2", "3", "4", "5", "6"].map((card) => (
                <HighLowCard card={card} />
              ))}
            </div>
          </div>
          <div className="gameCards">
            <HighLowCard card="7" />
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            Even
            <div className="gameCards">
              {[8, 9, 10, "J", "Q", "K"].map((card) => (
                <HighLowCard card={card} />
              ))}
            </div>
          </div>
        </div>
        <div className="oddEvenBtn">
          <div className="payoutBtn">Payout 2.12</div>
          <div className="payoutBtn">Payout 1.83</div>
        </div>
      </div>
      <hr />
      <div className="lastSecCardsDiv">
        <div className="redBalckCard">
          <img
            className="redCard"
            src="/assets/icons/lucky7Rule/redCard.svg"
            alt="red-card"
          />
          <div className="payoutBtn">Payout 1.97</div>
        </div>
        <div className="redBalckCard">
          <img
            className="blackCard"
            src="/assets/icons/lucky7Rule/blackCard.svg"
            alt="black-card"
          />
          <div className="payoutBtn">Payout 1.97</div>
        </div>
      </div>
      <hr />
      <div className="lastPayout">
        <div className="gameCards">
          {["A", "2", "3", "4", "5", "6", 7, 8, 9, "J", "Q", "K"].map(
            (card) => (
              <HighLowCard card={card} />
            )
          )}
        </div>
        <div className="payoutBtn">Payout 12.00</div>
      </div>
    </div>
  );
}

export default Lucky7GameRule;
