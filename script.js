document.addEventListener("DOMContentLoaded", function () {
  const getSumBtn = document.createElement("button");
  getSumBtn.append("Get Total Price");
  document.body.appendChild(getSumBtn);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    const prices = document.querySelectorAll('.price');
    prices.forEach(price => {
      totalPrice += parseFloat(price.textContent);
    });
    return totalPrice;
  };

  const addTotalPriceRow = () => {
    const table = document.querySelector('table');
    const totalPrice = calculateTotalPrice();
    const newRow = table.insertRow(-1); // Insert row at the end of the table
    const cell = newRow.insertCell(0);
    cell.colSpan = 2;
    cell.textContent = 'Total Price: Rs ' + totalPrice;
  };

  getSumBtn.addEventListener("click", addTotalPriceRow);
});
