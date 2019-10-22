// Save multiple contacts to localStorage
let contacts;
// see if there are any contacts
// if there is push in the new data
// if not, the catch will pick it up and create it
// so no error will occure
try {
    contacts = JSON.parse(localStorage.contacts);
} catch (e) {
    contacts = [];
}

contacts.save = function() {
    localStorage.contacts = JSON.stringify(this);
};