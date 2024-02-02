import React from "react";
import "./Result.css";
import {
  calculateInvestmentResults,
  formatter,
} from "../../util/investment.js";

const Result = ({ input }) => {
  const resultsData = calculateInvestmentResults(input);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;
  console.log(resultsData);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invest Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((data) => {
          const totalInterest =
            data.valueEndOfYear - data.annualInvestment * data.year;
          const totalAmoutInvested = data.valueEndOfYear - totalInterest;
          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmoutInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Result;
