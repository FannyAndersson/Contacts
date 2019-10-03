let body = document.querySelector('body');


let nameLabel = document.createElement('LABEL');
nameLabel.innerHTML = 'Namn';
document.body.append(nameLabel);

let inputFieldName = document.createElement('INPUT');
inputFieldName.setAttribute('type', 'text');
inputFieldName.setAttribute('value', '');
inputFieldName.setAttribute('placeholder', 'Skriv in ditt namn')
inputFieldName.setAttribute('name', 'submit');
document.body.append(inputFieldName);

let phoneNumberLabel = document.createElement('LABEL');
phoneNumberLabel.innerHTML = 'Telefonnummer';
document.body.append(phoneNumberLabel);

let inputFieldPhonenumber = document.createElement('INPUT');
inputFieldPhonenumber.setAttribute('type', 'text');
inputFieldPhonenumber.setAttribute('value', '');
inputFieldPhonenumber.setAttribute('placeholder', 'Skriv in ditt telefonnummer');
inputFieldPhonenumber.setAttribute('class', 'submit');
document.body.append(inputFieldPhonenumber);

let emailLabel = document.createElement('LABEL');
emailLabel.innerHTML = 'Email';
document.body.append(emailLabel);

let inputFieldEmail = document.createElement('INPUT');
inputFieldEmail.setAttribute('type', 'text');
inputFieldEmail.setAttribute('value', '');
inputFieldEmail.setAttribute('placeholder', 'Skriv in din email')
inputFieldEmail.setAttribute('class', 'submit');
document.body.append(inputFieldEmail);

let button = document.createElement('BUTTON');
button.innerHTML = 'Lägg till kontakt';
button.setAttribute('class', 'btn-add-name')
document.body.append(button)