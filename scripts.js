function addContact() {
    // Get the values from the form
    let name = document.getElementById("nome-contato").value;
    let phone = document.getElementById("phone-contato").valueAsNumber;

    // Create a new row for the contact
    let table = document.getElementById("table");
    let row = table.insertRow();

    // Insert the contact information into the cells
    let nameCell = row.insertCell(0);
    let phoneCell = row.insertCell(1);
    nameCell.innerHTML = name;
    phoneCell.innerHTML = phone;
  }