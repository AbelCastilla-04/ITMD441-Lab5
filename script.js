document.getElementById("tip-form").addEventListener("input", () => {
  const billInput = document.getElementById("bill");
  const tipRange = document.getElementById("tipRange");
  const tipPercent = document.getElementById("tipPercent");
  const tipAmount = document.getElementById("tipAmount");
  const totalWithTip = document.getElementById("totalWithTip");
  const totalWithTax = document.getElementById("totalWithTax");

  let billValue = parseFloat(billInput.value);
  let tipValue = parseInt(tipRange.value);

  if (isNaN(billValue) || billValue < 0) {
    tipPercent.value = tipAmount.value = totalWithTip.value = totalWithTax.value = "";
    return;
  }

  tipPercent.value = `${tipValue}%`;

  const tip = (tipValue / 100) * billValue;
  const totalTip = billValue + tip;
  const totalTax = totalTip * 1.11;

  tipAmount.value = tip.toFixed(2);
  totalWithTip.value = totalTip.toFixed(2);
  totalWithTax.value = totalTax.toFixed(2);

  if (billValue === 0) {
    billInput.value = "";
    tipPercent.value = tipAmount.value = totalWithTip.value = totalWithTax.value = "";
  }
});
