class ContactHistory extends App {
    constructor(id) {
        super();

        this.id = id;
        this.historySection = document.createElement('section');
        this.containerHistory = document.createElement('container');
    }

    showContact() {
        let oneContact = contacts.find(contact => {
            return contact.id === this.id;
        });

        let body = document.querySelector('.body');

        let section = document.createElement('section');
        section.setAttribute('class', 'section');
        section.setAttribute('id', 'current-section');
        body.append(section);

        let container = document.createElement('container');
        container.setAttribute('class', 'container');

        let divForHeading = document.createElement('div');
        divForHeading.setAttribute('class', 'div-for-heading');

        let divWrapper = document.createElement('div');
        divWrapper.setAttribute('class', 'div-wrapper-contacts');
        divForHeading.append(divWrapper);

        let heading = document.createElement('h3');
        heading.setAttribute('class', 'heading');
        heading.innerHTML = 'Nuvarande kontakt';
        divWrapper.append(heading);
        container.append(divForHeading);
        section.append(container);

        let div = document.createElement('div');
        div.setAttribute('class', 'div-display-container-history');

        let rowName = document.createElement('row');
        rowName.setAttribute('class', 'row-name-current-contact');

        let iName = document.createElement('i');
        iName.setAttribute('class', 'fas fa-user');
        rowName.append(iName);

        let spanName = document.createElement('span');
        spanName.setAttribute('class', 'span-name');
        spanName.innerHTML = oneContact.current.name;
        rowName.append(spanName);
        div.append(rowName);

        let rowPhone = document.createElement('row');
        rowPhone.setAttribute('class', 'row-phone-current-contact');

        let iPhone = document.createElement('i');
        iPhone.setAttribute('class', 'fas fa-phone');
        rowPhone.append(iPhone);

        let spanPhone = document.createElement('span');
        spanPhone.setAttribute('class', 'span-phone');
        spanPhone.innerText = oneContact.current.phone;
        rowPhone.append(spanPhone);
        div.append(rowPhone);

        let row = document.createElement('row');
        row.setAttribute('class', 'row-btn-goback');

        let iEmail = document.createElement('i');
        iEmail.setAttribute('class', 'fas fa-envelope');
        row.append(iEmail);

        let spanEmail = document.createElement('span');
        spanEmail.setAttribute('class', 'span-email');
        spanEmail.innerText = oneContact.current.email;
        row.append(spanEmail);

        let goBackButton = document.createElement('button');
        goBackButton.setAttribute('data-contactid', oneContact.id);
        goBackButton.setAttribute('id', 'btn-goback');
        goBackButton.innerHTML = 'Gå tillbaka till kontaktlista';
        row.append(goBackButton);
        div.append(row);
        container.append(div);

        this.displayContactHistory();
    }

    displayContactHistory() {
        let oneContact = contacts.find(contact => {
            return contact.id === this.id;
        });

        let contactHistory = oneContact.history.sort((a, b) => a.added - b.added);

        let body = document.querySelector('.body');

        this.historySection.setAttribute('class', 'section');
        this.historySection.setAttribute('id', 'history-section');
        body.append(this.historySection);

        this.containerHistory.setAttribute('class', 'container');

        let divForHeading = document.createElement('div');
        divForHeading.setAttribute('class', 'div-for-heading');

        let div = document.createElement('div');
        div.setAttribute('class', 'div-wrapper-contacts');
        divForHeading.append(div);

        let heading = document.createElement('h3');
        heading.setAttribute('class', 'heading');
        heading.innerHTML = 'Historik';
        div.append(heading);
        this.containerHistory.append(divForHeading);

        this.historySection.append(this.containerHistory);

        contactHistory.forEach((contact, index) => {
            let div = document.createElement('div');
            div.setAttribute('class', 'history-div');

            let rowName = document.createElement('row');
            rowName.setAttribute('class', 'row-name-current-contact');

            let iName = document.createElement('i');
            iName.setAttribute('class', 'fas fa-user');
            rowName.append(iName);

            let spanName = document.createElement('span');
            spanName.setAttribute('class', 'span-name');
            spanName.innerHTML = contact.name;
            rowName.append(spanName);
            div.append(rowName);

            let rowPhone = document.createElement('row');
            rowPhone.setAttribute('class', 'row-phone-current-contact');

            let iPhone = document.createElement('i');
            iPhone.setAttribute('class', 'fas fa-phone');
            rowPhone.append(iPhone);

            let spanPhone = document.createElement('span');
            spanPhone.setAttribute('class', 'span-phone');
            spanPhone.innerText = contact.phone;
            rowPhone.append(spanPhone);
            div.append(rowPhone);

            let row = document.createElement('row');
            row.setAttribute('class', 'row-reset-button');

            let spanEmail = document.createElement('span');
            spanEmail.setAttribute('class', 'span-email');
            spanEmail.innerText = contact.email;
            row.append(spanEmail);

            let resetButton = document.createElement('button');
            resetButton.setAttribute('data-contactid', oneContact.id);
            resetButton.setAttribute('data-index', index);
            resetButton.setAttribute('id', 'btn-reset');
            resetButton.innerHTML = 'Återställ kontakt';
            row.append(resetButton);
            div.append(row);
            this.containerHistory.append(div);
        });
    }
}