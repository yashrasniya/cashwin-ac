import React from "react";
import "./teenpatiRule.scss";
function TeenpatiRule() {
  const ThreeSetCard = ({ cards }) => {
    return (
      <div className="threeSet">
        {cards.map((name, index) => (
          <img
            key={index}
            className={`eachCard card-${index + 1}`}
            src={`/assets/icons/teenpatiRule/card${name}.svg`}
            alt="card"
          />
        ))}
      </div>
    );
  };
  return (
    <div className="teenpatiRuleDiv">
      <div className="header">
        Highest hand wins. Ranking from high to low is:
      </div>
      <div className="d-flex flex-row justify-content-around flex-wrap mt-3">
        <div>
          <div className="sequenceDiv">
            <div>1. Pure Sequence</div>
            <div className="d-flex seqCard">
              <ThreeSetCard cards={["A", "K", "Q"]} />
              <ThreeSetCard cards={["A", "2", "3"]} />
              <ThreeSetCard cards={["K", "Q", "J"]} />
              <img
                className="me-2"
                src="/assets/icons/teenpatiRule/3dots.svg"
                alt="3dots"
              />
              <ThreeSetCard cards={["4", "2", "3"]} />
            </div>
          </div>
          <div className="sequenceDiv">
            <div>2. Trail or Set (three of same rank)</div>
            <div className="d-flex seqCard">
              <ThreeSetCard cards={["A", "A", "A"]} />
              <ThreeSetCard cards={["K", "K", "K"]} />
              <img
                className="me-2"
                src="/assets/icons/teenpatiRule/3dots.svg"
                alt="3dots"
              />
              <img
                className="me-2"
                src="/assets/icons/teenpatiRule/3dots.svg"
                alt="3dots"
              />
              <img
                className="me-2"
                src="/assets/icons/teenpatiRule/3dots.svg"
                alt="3dots"
              />
              <ThreeSetCard cards={["2", "2", "2"]} />
            </div>
          </div>
          <div className="sequenceDiv">
            <div>3. Sequence (run)</div>
            <div className="d-flex seqCard">
              <ThreeSetCard cards={["A", "K", "Q"]} />
              <ThreeSetCard cards={["A", "2", "3"]} />
              <ThreeSetCard cards={["K", "Q", "J"]} />
              <img
                className="me-2"
                src="/assets/icons/teenpatiRule/3dots.svg"
                alt="3dots"
              />
              <ThreeSetCard cards={["4", "2", "3"]} />
            </div>
          </div>
        </div>
        <div>
          <div className="sequenceDiv">
            <div>4. Color</div>
            <div className="d-flex seqCard">
              <ThreeSetCard cards={["A", "K", "J"]} />
              <ThreeSetCard cards={["A", "K", "10"]} />
              <img
                className="me-2"
                src="/assets/icons/teenpatiRule/3dots.svg"
                alt="3dots"
              />
              <img
                className="me-2"
                src="/assets/icons/teenpatiRule/3dots.svg"
                alt="3dots"
              />
              <img
                className="me-2"
                src="/assets/icons/teenpatiRule/3dots.svg"
                alt="3dots"
              />
              <ThreeSetCard cards={["5", "3", "2"]} />
            </div>
          </div>
          <div className="sequenceDiv">
            <div>5. Pair (two cards of same rank)</div>
            <div className="d-flex seqCard">
              <ThreeSetCard cards={["A", "A", "K"]} />
              <ThreeSetCard cards={["K", "K", "Q"]} />
              <img
                className="me-2"
                src="/assets/icons/teenpatiRule/3dots.svg"
                alt="3dots"
              />
              <img
                className="me-2"
                src="/assets/icons/teenpatiRule/3dots.svg"
                alt="3dots"
              />
              <img
                className="me-2"
                src="/assets/icons/teenpatiRule/3dots.svg"
                alt="3dots"
              />
              <ThreeSetCard cards={["2", "2", "3"]} />
            </div>
          </div>
          <div className="sequenceDiv">
            <div>6. High Card</div>
            <div className="d-flex seqCard">
              <ThreeSetCard cards={["A", "K", "J"]} />
              <ThreeSetCard cards={["A", "K", "10"]} />
              <img
                className="me-2"
                src="/assets/icons/teenpatiRule/3dots.svg"
                alt="3dots"
              />
              <img
                className="me-2"
                src="/assets/icons/teenpatiRule/3dots.svg"
                alt="3dots"
              />
              <img
                className="me-2"
                src="/assets/icons/teenpatiRule/3dots.svg"
                alt="3dots"
              />
              <ThreeSetCard cards={["5", "3", "2"]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeenpatiRule;
