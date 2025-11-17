const nameInput = document.getElementById("item-name-input");
const qtyInput = document.getElementById("item-qty-input");
const priceInput = document.getElementById("item-price-input");
const addButton = document.getElementById("add");
const tableBody = document.getElementById("table-body");
const totalDisplay = document.getElementById("total");

let grandTotal = 0;

addButton.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const qty = qtyInput.value.trim();
  const price = priceInput.value.trim();

  if (!name || !qty || !price || qty <= 0 || price <= 0) {
    alert("Enter valid name, qty and price");
    return;
  }

  const subtotal = qty * price;
  grandTotal += subtotal;

  const row = document.createElement("tr");

  row.innerHTML = `
    <td id="item">${name}</td>
    <td id="qty">${qty}</td>
    <td id="price">${price}</td>
    <td id="subtotal">${subtotal}</td>
  `;

  tableBody.appendChild(row);

  // MUST show only the number for Cypress
  totalDisplay.textContent = grandTotal;

  nameInput.value = "";
  qtyInput.value = "";
  priceInput.value = "";
});
