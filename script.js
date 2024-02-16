let totalAmount = 0;
let remainingAmount = 0;
let expenses = [];

function initializeExpense() {
    totalAmount = parseInt(document.getElementById("totalAmount").value) || 0;
    remainingAmount = totalAmount;
    updateRemainingAmount();
}

function addExpense() {
    const expenseAmount = parseInt(document.getElementById("expenseAmount").value) || 0;
    const expenseItem = document.getElementById("expenseItem").value;
    const dateTime = new Date().toLocaleString();

    if (expenseAmount <= remainingAmount && expenseItem !== "") {
        expenses.push({
            amount: expenseAmount,
            item: expenseItem,
            date: dateTime
        });

        remainingAmount -= expenseAmount;
        updateExpenseList();
        updateRemainingAmount();
    } else {
        alert("Invalid expense amount or item name!");
    }
}

function updateExpenseList() {
    const expenseListContainer = document.getElementById("expenseList");
    expenseListContainer.innerHTML = "";

    expenses.forEach(expense => {
        const expenseItem = document.createElement("div");
        expenseItem.classList.add("summary-item");
        expenseItem.innerHTML = `<p>${expense.amount} Rupees for ${expense.item} on ${expense.date}</p>`;
        expenseListContainer.appendChild(expenseItem);
    });
}

function updateRemainingAmount() {
    document.getElementById("remainingAmountValue").innerText = remainingAmount;
}
