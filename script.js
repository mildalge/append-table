
var add = document.getElementById("add");
add.addEventListener("click", displayDetails);

var row = 3;
function displayDetails(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var age = document.getElementById("age").value;

    
    
    if (!firstName || !lastName || !age){
        alert("Įveskite visus duomenis");
        return;
    }

    var myTable = document.getElementById("myTable");

    var newRow = myTable.insertRow(+4);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = age;
    
    firstName.value = ""
    row++;
}
