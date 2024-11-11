function calculateReturn() {
  const initialInvestment = parseFloat(document.getElementById("initialInvestment").value);
  const monthlyContribution = parseFloat(document.getElementById("monthlyContribution").value);
  const annualReturnRate = parseFloat(document.getElementById("annualReturnRate").value) / 100;
  const investmentPeriod = parseInt(document.getElementById("investmentPeriod").value);

  // Calculate the number of months
  const months = investmentPeriod * 12;

  // Calculate the monthly interest rate
  const monthlyInterestRate = annualReturnRate / 12;

  // Calculate the future value
  let futureValue = 0;
  for (let i = 0; i < months; i++) {
    futureValue = (futureValue + monthlyContribution) * (1 + monthlyInterestRate);
  }
  futureValue += initialInvestment * Math.pow(1 + monthlyInterestRate, months);

  document.getElementById("result").innerHTML = `
    <h2>Estimated Future Value:</h2>
    <p>$${futureValue.toFixed(2)}</p>
  `;
}
