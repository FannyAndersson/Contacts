class EditContact extends App {
    constructor(id) {
        super();

        this.id = id;
    }

    newEditForm() {
        let body = document.querySelector('.body');

        let div = document.createElement('div');
        div.setAttribute('class', 'modal');
        body.append(div);

        let modalDiv = document.createElement('div');
        modalDiv.setAttribute('class', 'modal-content');
        div.append(modalDiv);

        let oneContact = contacts.find(contact => {
            return contact.id === this.id;
        });

        let rowForName = document.createElement('row');
        rowForName.setAttribute('class', 'row-for-name-modal');

        let iName = document.createElement('i');
        iName.setAttribute('class', 'fas fa-user');
        rowForName.append(iName);

        let nameLabel = document.createElement('label');
        nameLabel.innerHTML = 'Namn';
        nameLabel.setAttribute('class', 'name-label');
        rowForName.append(nameLabel);

        let closeButton = document.createElement('button');
        closeButton.setAttribute('data-contactid', oneContact.id);
        closeButton.innerHTML = 'X';
        closeButton.setAttribute('class', 'close-btn-modal');
        rowForName.append(closeButton);
        modalDiv.append(rowForName);

        let inputFieldName = document.createElement('input');
        inputFieldName.setAttribute('type', 'text');
        inputFieldName.setAttribute('value', oneContact.current.name);
        inputFieldName.setAttribute('id', 'update-name');
        inputFieldName.setAttribute('placeholder', 'Skriv in ditt namn');
        inputFieldName.setAttribute('class', 'submit');
        modalDiv.append(inputFieldName);

        let rowForPhone = document.createElement('row');
        rowForPhone.setAttribute('class', 'row-for-phone-modal');

        let iPhone = document.createElement('i');
        iPhone.setAttribute('class', 'fas fa-phone');
        rowForPhone.append(iPhone);

        let phoneLabel = document.createElement('label');
        phoneLabel.innerHTML = 'Telefonnummer';
        phoneLabel.setAttribute('class', 'label-phone-modal');
        rowForPhone.append(phoneLabel);
        modalDiv.append(rowForPhone);

        let inputFieldPhonenumber = document.createElement('input');
        inputFieldPhonenumber.setAttribute('type', 'text');
        inputFieldPhonenumber.setAttribute('value', oneContact.current.phone);
        inputFieldPhonenumber.setAttribute('id', 'update-phone');
        inputFieldPhonenumber.setAttribute(
            'placeholder',
            'Skriv in ditt telefonnummer'
        );
        inputFieldPhonenumber.setAttribute('class', 'submit');
        modalDiv.append(inputFieldPhonenumber);

        let rowForEmail = document.createElement('row');
        rowForEmail.setAttribute('class', 'row-for-email-modal');

        let iEmail = document.createElement('i');
        iEmail.setAttribute('class', 'fas fa-envelope');
        rowForEmail.append(iEmail);

        let labelEmail = document.createElement('label');
        labelEmail.innerHTML = 'Email';
        labelEmail.setAttribute('class', 'label-email-modal');
        rowForEmail.append(labelEmail);
        modalDiv.append(rowForEmail);

        let row = document.createElement('row');
        row.setAttribute('class', 'last-row-modal');

        let inputFieldEmail = document.createElement('input');
        inputFieldEmail.setAttribute('type', 'text');
        inputFieldEmail.setAttribute('value', oneContact.current.email);
        inputFieldEmail.setAttribute('id', 'update-email');
        inputFieldEmail.setAttribute('placeholder', 'Skriv in din email');
        inputFieldEmail.setAttribute('class', 'submit');
        row.append(inputFieldEmail);

        let saveEditedContactBtn = document.createElement('button');
        saveEditedContactBtn.setAttribute('data-contactid', oneContact.id);
        saveEditedContactBtn.innerHTML = 'Uppdatera kontakt';
        saveEditedContactBtn.setAttribute('class', 'edited-btn-modal');
        row.append(saveEditedContactBtn);
        modalDiv.append(row);
    }
}