import { calculateInvestmentResults, formatter } from "../Util/Util.jsx";
export default function Result({ input }) {
  const resultdata = calculateInvestmentResults(input);
  const initialInvestment =
    resultdata[0].valueEndOfYear - resultdata[0].annualInvestment;
  console.log(resultdata);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment value</th>
          <th>Interest (year)</th>
          <th>Total Interest</th>
          <th>Invested capital</th>
        </tr>
      </thead>
      <tbody>
        {resultdata.map((yearData) => {
          const totalAmtInvested =
            initialInvestment + yearData.annualInvestment * yearData.year;
          const totalInt = yearData.valueEndOfYear - totalAmtInvested;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInt)}</td>
              <td>{formatter.format(totalAmtInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
