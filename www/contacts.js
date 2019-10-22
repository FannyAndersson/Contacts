class Contacts extends App {
    constructor() {
        super();

        this.section = document.createElement('section');
        this.container = document.createElement('container');

        this.displaySavedContacts();
    }

    displaySavedContacts() {
        let body = document.querySelector('.body');

        this.section.setAttribute('class', 'contacts-section');
        body.append(this.section);
        this.container.setAttribute('class', 'container');

        let divForHeading = document.createElement('div');
        divForHeading.setAttribute('class', 'div-for-heading');

        let div = document.createElement('div');
        div.setAttribute('class', 'div-wrapper-contacts');
        divForHeading.append(div);

        let heading = document.createElement('h3');
        heading.setAttribute('class', 'heading');
        heading.innerHTML = 'Kontaktlista';
        div.append(heading);
        this.container.append(divForHeading);

        this.section.append(this.container);

        contacts.forEach(contact => {
            let div = document.createElement('div');
            div.setAttribute('data-contactid', contact.id);
            div.setAttribute('class', 'div-display-container');

            let rowForName = document.createElement('row');
            rowForName.setAttribute('class', 'row-for-name');

            let iName = document.createElement('i');
            iName.setAttribute('class', 'fas fa-user');
            rowForName.append(iName);

            let spanName = document.createElement('span');
            spanName.setAttribute('class', 'span-name');
            spanName.innerHTML = contact.current.name;
            rowForName.append(spanName);

            let modalButton = document.createElement('button');
            modalButton.setAttribute('data-contactid', contact.id);
            modalButton.setAttribute('class', 'edit-contact-modal');
            modalButton.innerHTML = 'Redigera kontakt';
            rowForName.append(modalButton);
            div.append(rowForName);

            let rowForPhone = document.createElement('row');
            rowForPhone.setAttribute('class', 'row-for-phone');

            let iPhone = document.createElement('i');
            iPhone.setAttribute('class', 'fas fa-phone');
            rowForPhone.append(iPhone);

            let spanPhone = document.createElement('span');
            spanPhone.setAttribute('class', 'span-phone');
            spanPhone.innerText = contact.current.phone;
            rowForPhone.append(spanPhone);
            div.append(rowForPhone);

            let rowForEmail = document.createElement('row');
            rowForEmail.setAttribute('class', 'row-for-email-contacts');

            let iEmail = document.createElement('i');
            iEmail.setAttribute('class', 'fas fa-envelope');
            rowForEmail.append(iEmail);

            let spanEmail = document.createElement('span');
            spanEmail.setAttribute('class', 'span-email');
            spanEmail.innerText = contact.current.email;
            rowForEmail.append(spanEmail);
            div.append(rowForEmail);

            let row = document.createElement('row');
            row.setAttribute('class', 'row-for-buttons');
            let historyButton = document.createElement('button');
            historyButton.setAttribute('data-contactid', contact.id);
            historyButton.setAttribute('class', 'btn-history');
            historyButton.innerHTML = 'Visa kontakt';
            row.append(historyButton);

            let removeButton = document.createElement('button');
            removeButton.setAttribute('data-contactid', contact.id);
            removeButton.setAttribute('class', 'btn-delete');
            removeButton.innerHTML = 'Ta bort kontakt';
            row.append(removeButton);
            div.append(row);
            this.container.append(div);
        });
    }
}