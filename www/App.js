class App {
    constructor() {}
    createDOM = () => {
        this.listen();
        this.form = new Form();
        this.contacts = new Contacts();
        this.editContact = new EditContact();
        this.contactHistory = new ContactHistory();
    };
    listen = () => {
        window.addEventListener('click', e => {
            e.preventDefault();
            if (e.target.closest('#btn-contact')) this.saveContact();

            if (e.target.closest('.btn-add-more-phone')) this.addMorePhonenumbers();
            if (e.target.closest('#btn-add-more-email')) this.addMoreEmail();
            if (e.target.closest('.btn-delete'))
                this.deleteContact(e.target.getAttribute('data-contactid'));
            if (e.target.closest('.btn-history'))
                this.showContactHistory(e.target.getAttribute('data-contactid'));
            if (e.target.closest('.edit-contact-modal'))
                this.editOneContact(e.target.getAttribute('data-contactid'));
            if (e.target.closest('.close-btn-modal')) this.closeModal();
            if (e.target.closest('.edited-btn-modal'))
                this.saveEditedContact(e.target.getAttribute('data-contactid'));
            if (e.target.closest('#btn-goback')) this.goBack();
            if (e.target.closest('#btn-reset')) this.resetContact(e.target);
        });
    };

    addMorePhonenumbers = e => {
        let myRow = document.querySelector('.row-phone-input');
        let inputfieldMorePhonenumber = document.createElement('input');
        inputfieldMorePhonenumber.setAttribute('type', 'text');
        inputfieldMorePhonenumber.setAttribute('value', '');
        inputfieldMorePhonenumber.setAttribute('id', 'phone');
        inputfieldMorePhonenumber.setAttribute(
            'placeholder',
            'Skriv in ditt telefonnummer'
        );
        inputfieldMorePhonenumber.setAttribute('class', 'submit-more-phone');
        myRow.append(inputfieldMorePhonenumber);
    };

    addMoreEmail = () => {
        let myRow = document.querySelector('.row-email-input');
        let inputfieldMoreEmail = document.createElement('input');
        inputfieldMoreEmail.setAttribute('type', 'text');
        inputfieldMoreEmail.setAttribute('value', '');
        inputfieldMoreEmail.setAttribute('id', 'email');
        inputfieldMoreEmail.setAttribute('placeholder', 'Skriv in din email');
        inputfieldMoreEmail.setAttribute('class', 'submit-more-email');
        myRow.append(inputfieldMoreEmail);
    };

    editOneContact = id => {
        this.editContact = new EditContact(Number(id)).newEditForm();

        let modal = document.querySelector('.modal');
        modal.classList.toggle('show-modal');
    };

    closeModal = () => {
        let modal = document.querySelector('.modal');
        modal.remove();

        document.querySelector('.contacts-section').outerHTML = '';
        new Contacts(contacts.id);
    };

    showContactHistory = id => {
        document.querySelector('.div-for-heading').innerHTML = '';
        document.querySelector('#id-form').innerHTML = '';
        document.querySelector('.contacts-section').innerHTML = '';

        this.contact = new ContactHistory(Number(id)).showContact();
    };

    deleteContact = id => {
        let indexToremove;
        contacts.filter((item, index) => {
            if (item.id == id) {
                indexToremove = index;
                return true;
            }
        });

        contacts.splice(indexToremove, 1);

        contacts.save();
        document.querySelector('.contacts-section').outerHTML = '';
        this.contacts = new Contacts();
    };

    saveContact = () => {
        let name = document.querySelector('input#name').value;
        let phone = document.querySelector('row.row-phone-input').children;
        let email = document.querySelector('row.row-email-input').children;

        if (name == '') {
            alert('Du måste fylla i ditt namn');
            return;
        }

        let filteredPhone = [].filter
            .call(phone, elem => {
                return elem.tagName === 'INPUT';
            })
            .map(input => {
                return input.value;
            });

        let filteredEmail = [].filter
            .call(email, elem => {
                return elem.tagName === 'INPUT';
            })
            .map(input => {
                return input.value;
            });

        const data = {
            history: [],
            current: {
                name: name,
                phone: filteredPhone,
                email: filteredEmail,
                added: Date.now()
            }
        };

        contacts.push(data);
        contacts.forEach((elem, index) => {
            elem.id = index++;
        });

        contacts.save();

        document.querySelector('.contacts-section').outerHTML = '';
        this.contacts = new Contacts();

        this.resetInput();
    };

    resetInput = () => {
        let inputVal = document.querySelector('#id-form').reset();
    };

    saveEditedContact = id => {
        let oneContact = contacts.find(contact => {
            return contact.id === Number(id);
        });

        let inputName = document.querySelector('#update-name').value;
        let inputPhone = document.querySelector('#update-phone').value;
        let inputEmail = document.querySelector('#update-email').value;

        oneContact.history.push(oneContact.current);

        let contactHistory = {
            name: inputName,
            phone: inputPhone,
            email: inputEmail,
            added: Date.now()
        };

        oneContact.current = contactHistory;

        contacts.save();

        let modal = document.querySelector('.modal');
        modal.remove();

        document.querySelector('.contacts-section').outerHTML = '';
        new Contacts(contacts.id);
    };

    resetContact = target => {
        let index = target.getAttribute('data-index');
        let id = target.getAttribute('data-contactid');
        let history;
        index = parseInt(index);
        id = parseInt(id);

        const contact = contacts.find(contact => contact.id === id);

        contact.history.push(contact.current);

        contact.current = contact.history.splice(index, 1)[0];

        contacts.save();

        document.querySelector('#current-section').outerHTML = '';
        document.querySelector('#history-section').outerHTML = '';
        new ContactHistory(id).showContact();
    };

    goBack = () => {
        window.location = 'http://localhost:3000/';
    };
}