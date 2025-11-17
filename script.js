let count = 0;

function addStudent() {
    const name          = document.getElementById("name").value.trim();
    const course        = document.getElementById("courses").value.trim();
    const mobile        = document.getElementById("mobileNumber").value.trim();
    const joiningDate   = document.getElementById("joiningDate").value.trim();
    const completedDate = document.getElementById("completedDate").value.trim();
    const Payment1      = document.getElementById("Payment1").value.trim();
    const Payment2      = document.getElementById("Payment2").value.trim();
    const Payment3      = document.getElementById("Payment3").value.trim();
    const balance       = document.getElementById("totalFees").value.trim();
    const total         = document.getElementById("Balance").value.trim();

    const status        = document.querySelector('input[name="status"]:checked');

    //  CHECK IF ANY FIELD IS EMPTY
    if (!name || !course || !mobile || !joiningDate || !Payment1 || !Payment2 || !Payment3 || !balance || !total || !status) {
        alert("⚠ Please fill all fields before adding the student!");
        return;
    }

    const table = document.getElementById("studentTable").querySelector("tbody");

    count++;

    const row = table.insertRow();
    
    row.innerHTML = `
        <td>${count}</td>
        <td>${name}</td>
        <td>${course}</td>
        <td>${mobile}</td>
        <td>${joiningDate}</td>
        <td>${completedDate}</td>
        <td>${Payment1}</td>
        <td>${Payment2}</td>
        <td>${Payment3}</td>
        <td>${total}</td>
        <td>${balance}</td>
        <td>
            <span class="${status.value === 'Completed' ? 'status-green' : 'status-red'}">
                ${status.value}
            </span>
        </td>
        <td><button class="btn-delete" onclick="deleteRow(this)">Delete</button></td>
    `;

    //  CLEAR ALL INPUTS AFTER SUCCESSFULLY ADDING STUDENT
    document.getElementById("name").value = "";
    document.getElementById("courses").value = "";
    document.getElementById("mobileNumber").value = "";
    document.getElementById("joiningDate").value = "";
    document.getElementById("completedDate").value = "";
    document.getElementById("Payment1").value = "";
    document.getElementById("Payment2").value = "";
    document.getElementById("Payment3").value = "";
    document.getElementById("totalFees").value = "";
    document.getElementById("Balance").value = "";

    //  CLEAR RADIO BUTTONS
    const radios = document.querySelectorAll('input[name="status"]');
    radios.forEach(r => r.checked = false);
}

function deleteRow(btn) {
    btn.parentNode.parentNode.remove();
}

function exportToExcel() {
    const table = document.getElementById("studentTable");
    const wb = XLSX.utils.table_to_book(table);
    XLSX.writeFile(wb, "StudentDetails.xlsx");
}
