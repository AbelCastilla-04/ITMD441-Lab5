document.getElementById("tip-form").addEventListener("input", () => {
  const billInput = document.getElementById("bill");
  const billError = document.getElementById("bill-error");
  const tipSlider = document.getElementById("tipRange");
  const tipPercentOutput = document.getElementById("tipPercent");
  const tipAmount = document.getElementById("tipAmount");
  const totalWithTax = document.getElementById("totalWithTax");
  const totalWithTipTax = document.getElementById("totalWithTipTax");

  const billValue = billInput.value.trim();

  // Validate input
  if (!/^\d*\.?\d+$/.test(billValue) || parseFloat(billValue) < 0) {
    billError.textContent = "Please enter a valid positive number.";
    billError.style.display = "block";
    billInput.classList.add("error");
    tipAmount.value = totalWithTax.value = totalWithTipTax.value = "";
    return;
  }

  // Valid input
  billError.textContent = "";
  billError.style.display = "none";
  billInput.classList.remove("error");

  const bill = parseFloat(billValue);
  const tipPercentage = parseInt(tipSlider.value);
  const taxAmount = bill * 0.11;
  const billWithTax = bill + taxAmount;
  const tip = (tipPercentage / 100) * bill;
  const finalTotal = billWithTax + tip;

  tipPercentOutput.textContent = tipPercentage;
  totalWithTax.value = billWithTax.toFixed(2);
  tipAmount.value = tip.toFixed(2);
  totalWithTipTax.value = finalTotal.toFixed(2);

  if (bill === 0) {
    billInput.value = "";
    tipAmount.value = totalWithTax.value = totalWithTipTax.value = "";
  }
});
