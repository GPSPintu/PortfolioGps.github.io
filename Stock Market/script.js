// Define a global variable to store the portfolio holdings
let holdings = [];

// Get form input values and add new holding to the portfolio table
const addHolding = (event) => {
  event.preventDefault();
  const ticker = document.getElementById('ticker').value.toUpperCase();
  const date = document.getElementById('date').value;
  const price = Number(document.getElementById('price').value);
  const shares = Number(document.getElementById('shares').value);
  const marketValue = price * shares;
  const newHolding = { ticker, date, price, shares, marketValue };
  holdings.push(newHolding);
  updateTable();
  updateTotal();
  document.getElementById('holding-form').reset();
}

// Update the portfolio table rows with the current holdings
const updateTab = () => {
  const tableBody = document.getElementById('portfolio-table').getElementsByTagName('tbody')[0];
  tableBody.innerHTML = '';
  holdings.forEach(holding => {
    const row = tableBody.insertRow();
    row.insertCell().innerHTML = holding.ticker;
    row.insertCell().innerHTML = holding.price.toFixed(2);
    row.insertCell().innerHTML = holding.shares.toFixed(2);
    row.insertCell().innerHTML = holding.marketValue.toFixed(2);
  });
}

// Calculate and display the total portfolio value and returns
const updateTotal = () => {
  const totalValue = holdings.reduce((acc, holding) => acc + holding.marketValue, 0);
  const totalReturns = totalValue - holdings.reduce((acc, holding) => acc + (holding.price * holding.shares), 0);
  document.getElementById('total-value').innerHTML = totalValue.toFixed(2);
  document.getElementById('total-returns').innerHTML = totalReturns.toFixed(2);
}

// Add event listener to form submit button
document.getElementById('holding-form').addEventListener('submit', addHolding);


// Update the portfolio table rows with the current holdings


const updateTable = () => {
    const tableBody = document.getElementById('portfolio-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';
    holdings.forEach((holding, index) => {
      const row = tableBody.insertRow();
      row.insertCell().innerHTML = holding.ticker;
      row.insertCell().innerHTML = holding.price.toFixed(2);
      row.insertCell().innerHTML = holding.shares.toFixed(2);
      row.insertCell().innerHTML = holding.marketValue.toFixed(2);
      const editButton = document.createElement('button');
      editButton.innerHTML = 'Edit';
      editButton.addEventListener('click', () => editHolding(index));
      row.insertCell().appendChild(editButton);
      const deleteButton = document.createElement('button');
      deleteButton.innerHTML = 'Delete';
      deleteButton.addEventListener('click', () => deleteHolding(index));
      row.insertCell().appendChild(deleteButton);
    });
  }
  
  // Edit a holding in the portfolio
  const editHolding = (index) => {
    const holding = holdings[index];
    document.getElementById('ticker').value = holding.ticker;
    document.getElementById('date').value = holding.date;
    document.getElementById('price').value = holding.price;
    document.getElementById('shares').value = holding.shares;
    holdings.splice(index, 1);
    updateTable();
    updateTotal();
  }
  
  // Delete a holding from the portfolio
  const deleteHolding = (index) => {
    holdings.splice(index, 1);
    updateTable();
    updateTotal();
  }
  



  //generate the pdf 
  
//   const downloadBtn = document.getElementById('download-btn');

// downloadBtn.addEventListener('click', () => {
//   // Create a new jsPDF instance
//   const doc = new jsPDF();

//   // Add portfolio table to the PDF
//   doc.autoTable({ html: '#portfolio-table' });

//   // Save the PDF and download it
//   doc.save('portfolio.pdf');
// });



// Get the generate PDF button element
// Load the pdf-lib library

