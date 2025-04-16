document.getElementById("tip-form").addEventListener("input", () => {
  const bill = parseFloat(document.getElementById("bill").value);
  const tipSlider = document.getElementById("tipRange");
  const tipPercentOutput = document.getElementById("tipPercent");
  const tipAmount = document.getElementById("tipAmount");
  const totalWithTax = document.getElementById("totalWithTax");
  const totalWithTipTax = document.getElementById("totalWithTipTax");

  if (isNaN(bill) || bill < 0) {
    tipAmount.value = totalWithTax.value = totalWithTipTax.value = "";
    return;
  }

  const tipPercentage = parseInt(tipSlider.value);
  tipPercentOutput.textContent = tipPercentage;

  const taxAmount = bill * 0.11;
  const billWithTax = bill + taxAmount;
  const tip = (tipPercentage / 100) * bill;
  const finalTotal = billWithTax + tip;

  totalWithTax.value = billWithTax.toFixed(2);
  tipAmount.value = tip.toFixed(2);
  totalWithTipTax.value = finalTotal.toFixed(2);

  if (bill === 0) {
    document.getElementById("bill").value = "";
    tipAmount.value = totalWithTax.value = totalWithTipTax.value = "";
  }
});
