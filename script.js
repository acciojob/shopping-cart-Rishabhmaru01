//your code here
  const nameInput = document.getElementById("item-name-input");
  const priceInput = document.getElementById("item-price-input");
  const addButton = document.getElementById("add");
  const tableBody = document.getElementById("table-body");
  const totalDisplay = document.getElementById("total");

  let grandTotal = 0;

  addButton.addEventListener("click", () => {
    const itemName = nameInput.value.trim();
    const priceValue = priceInput.value.trim();

    // Validate input
    if (itemName === "" || priceValue === "" || isNaN(priceValue) || Number(priceValue) <= 0) {
      alert("Please enter a valid item name and price.");
      return;
    }

    // Convert price to number
    const price = Number(priceValue);
    grandTotal += price;

    // Create new row
    const row = document.createElement("tr");

    const itemCol = document.createElement("td");
    itemCol.id = "item";
    itemCol.textContent = itemName;

    const priceCol = document.createElement("td");
    priceCol.id = "price";
    priceCol.textContent = price;

    row.appendChild(itemCol);
    row.appendChild(priceCol);
    tableBody.appendChild(row);

    // Update total
    totalDisplay.textContent = "Grand Total: " + grandTotal;

    // Clear inputs
    nameInput.value = "";
    priceInput.value = "";
  });