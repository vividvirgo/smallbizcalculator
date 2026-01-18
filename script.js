function formatNumber(n) {
  return Math.ceil(n).toLocaleString();
}

function calculateBreakEven() {
  const fixedCosts = parseFloat(document.getElementById("fixedCosts").value);
  const pricePerUnit = parseFloat(document.getElementById("pricePerUnit").value);
  const variableCost = parseFloat(document.getElementById("variableCost").value);

  const resultsEl = document.getElementById("results");

  if (isNaN(fixedCosts) || isNaN(pricePerUnit) || isNaN(variableCost)) {
    resultsEl.innerHTML = "Please fill out all fields.";
    return;
  }

  if (pricePerUnit <= variableCost) {
    resultsEl.innerHTML = "Revenue per sale must be greater than variable cost.";
    return;
  }

  const contributionMargin = pricePerUnit - variableCost;
  const breakEvenUnits = fixedCosts / contributionMargin;
  const breakEvenRevenue = breakEvenUnits * pricePerUnit;

  resultsEl.innerHTML = `
    <strong>Break-Even Sales:</strong> ${formatNumber(breakEvenUnits)} units<br>
    <strong>Break-Even Monthly Revenue:</strong> $${Math.ceil(breakEvenRevenue).toLocaleString()}<br>
    <strong>Contribution Margin:</strong> $${contributionMargin.toLocaleString()} per sale
  `;
}
