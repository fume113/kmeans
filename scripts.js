// Simulated data from the database
var dataFromDatabase = ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5", "Data 6", "Data 7", "Data 8", "Data 9", "Data 10", "Data 11", "Data 12", "Data 13", "Data 14", "Data 15", "Data 16", "Data 17", "Data 18", "Data 19", "Data 20"];

// Function to populate data into the table
function populateData() {
  var dataBody = document.getElementById("dataBody");
  // Clear previous data
  dataBody.innerHTML = "";

  // Loop through data and create table rows
  for (var i = 0; i < Math.min(dataFromDatabase.length, 15); i++) {
    var row = document.createElement("tr");
    var indexCell = document.createElement("td");
    indexCell.textContent = i + 1;
    var dataCell = document.createElement("td");
    dataCell.textContent = dataFromDatabase[i];
    row.appendChild(indexCell);
    row.appendChild(dataCell);
    dataBody.appendChild(row);
  }
}

// Call the function to populate data initially
populateData();
