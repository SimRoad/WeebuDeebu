//The dynamically allocated contacts
var contacts = [];

//These are needed to check if the inputs are in within their proper characters
const nameRegex = /^[A-Za-z ]+$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const phoneRegex = /^\d{11}$/;

function addContact() {
    let cell = new Array(4);
    const inBox = ["SurnameBox", "FirstnameBox", "EmailBox", "PhoneBox"];

    let x; 

    //Gets values and empties them after
    for(x = 0; x < 4; x++){
        cell[x] = document.getElementById(inBox[x]).value;
        document.getElementById(inBox[x]).value= " ";
    }

    //Validates the inputs before adding them-----
    if (!nameRegex.test(cell[0]) || !nameRegex.test(cell[1])) {
        alert("Please enter valid names containing only letters.");
        return;
    }

    if (!emailRegex.test(cell[2])) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!phoneRegex.test(cell[3])) {
        alert("Please enter a valid 11-digit phone number.");
        return;
    }
    //-----Validation

    //Object
    var contact = {
        surName: cell[0],
        firstName: cell[1],
        email: cell[2],
        phone: cell[3]
    };


    contacts.push(contact);

    displayContacts();
}

function displayContacts() {
    var table = document.getElementById("contactList").getElementsByTagName('tbody')[0];
    const update = document.getElementById("addContact");
    table.innerHTML = "";

    var cell = new Array(5);

    for (var i = 0; i < contacts.length; i++) {
        var row = table.insertRow(i);


        for(let x = 0; x < 5; x++){
            cell[x] = row.insertCell(x);
        }

        cell[0].innerHTML = contacts[i].surName;
        cell[1].innerHTML = contacts[i].firstName;
        cell[2].innerHTML = contacts[i].email;
        cell[3].innerHTML = contacts[i].phone;
        cell[4].innerHTML = '<button onclick="editContact(' + i + ')" class="editButton">Edit</button> | <button onclick="deleteContact(' + i + ')" class="delButton">X</button>';
    }
    table.appendChild(update);
}

function editContact(index) {
    //The purpose of this is to check the change as it submits and alerting when its wrong
    var newLastName = prompt("Last Name:", contacts[index].surName);
        if (!nameRegex.test(newLastName)) {
            alert("Please enter valid names containing only letters.");
            return;
        }


    var newFirstName = prompt("First Name:", contacts[index].firstName);
        if (!nameRegex.test(newFirstName)) {
            alert("Please enter valid names containing only letters.");
            return;
        }


    var newEmail = prompt("Email:", contacts[index].email);
        if (!emailRegex.test(newEmail)) {
            alert("Please enter a valid email address.");
            return;
        }


    var newPhone = prompt("Phone:", contacts[index].phone);
        if (!phoneRegex.test(newPhone)) {
            alert("Please enter a valid 11-digit phone number.");
            return;
        }
    //

    
    contacts[index].surName = newLastName;
    contacts[index].firstName = newFirstName;
    contacts[index].email = newEmail;
    contacts[index].phone = newPhone;
    displayContacts();
}

function deleteContact(index) {
    if (confirm("Delete this contact?")) {
        contacts.splice(index, 1);
        displayContacts();
    }
}

displayContacts();