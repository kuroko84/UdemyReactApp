import React from "react";
import "./UserInput.css";

const UserInput = ({ onChange, userInput }) => {
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Invesment</label>
          <input
            type="number"
            required
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
            value={userInput.initialInvestment}
          />
        </p>
        <p>
          <label>Annual Invesment</label>
          <input
            type="number"
            required
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
            value={userInput.annualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            onChange={(event) => onChange("expectedReturn", event.target.value)}
            value={userInput.expectedReturn}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            onChange={(event) => onChange("duration", event.target.value)}
            value={userInput.duration}
          />
        </p>
      </div>
    </div>
  );
};

export default UserInput;
