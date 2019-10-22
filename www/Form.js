class Form extends App {
    constructor(data) {
        super();

        this.data = data;

        this.addForm();
    }

    addForm() {
        let body = document.body;
        body.setAttribute('class', 'body');

        let form = document.createElement('form');
        form.setAttribute('class', 'form');
        form.setAttribute('id', 'id-form');
        body.append(form);

        let container = document.createElement('container');
        container.setAttribute('class', 'form-container');
        form.append(container);

        let divForHeading = document.createElement('div');
        divForHeading.setAttribute('class', 'div-for-heading');

        let div = document.createElement('div');
        div.setAttribute('class', 'div-wrapper');
        divForHeading.append(div);

        let heading = document.createElement('h2');
        heading.setAttribute('class', 'heading');
        heading.innerHTML = 'Lägg till kontakt';
        div.append(heading);
        container.append(divForHeading);

        let divForInputs = document.createElement('div');
        divForInputs.setAttribute('id', 'div-for-inputs');
        container.append(divForInputs);

        let rowForName = document.createElement('row');
        rowForName.setAttribute('class', 'row-for-name-form');

        let iName = document.createElement('i');
        iName.setAttribute('class', 'fas fa-user');
        rowForName.append(iName);

        let nameLabel = document.createElement('label');
        nameLabel.innerHTML = 'Namn';
        nameLabel.setAttribute('class', 'name-label');
        rowForName.append(nameLabel);
        divForInputs.append(rowForName);

        let inputFieldName = document.createElement('input');
        inputFieldName.setAttribute('type', 'text');
        inputFieldName.setAttribute('value', '');
        inputFieldName.setAttribute('id', 'name');
        inputFieldName.setAttribute('placeholder', 'Skriv in ditt namn');
        inputFieldName.setAttribute('class', 'name-form');
        divForInputs.append(inputFieldName);

        let rowForPhoneNumber = document.createElement('row');
        rowForPhoneNumber.setAttribute('id', 'id-row-phone');
        rowForPhoneNumber.setAttribute('class', 'row-for-phonenumber');

        let iPhone = document.createElement('i');
        iPhone.setAttribute('class', 'fas fa-phone icon-phone');
        rowForPhoneNumber.append(iPhone);

        let phoneNumberLabel = document.createElement('label');
        phoneNumberLabel.innerHTML = 'Telefonnummer';
        phoneNumberLabel.setAttribute('class', 'label-phone');
        rowForPhoneNumber.append(phoneNumberLabel);
        divForInputs.append(rowForPhoneNumber);

        let rowPhoneInput = document.createElement('row');
        rowPhoneInput.setAttribute('class', 'row-phone-input');

        let inputFieldPhonenumber = document.createElement('input');
        inputFieldPhonenumber.setAttribute('type', 'text');
        inputFieldPhonenumber.setAttribute('value', '');
        inputFieldPhonenumber.setAttribute('id', 'phone');
        inputFieldPhonenumber.setAttribute(
            'placeholder',
            'Skriv in ditt telefonnummer'
        );
        inputFieldPhonenumber.setAttribute('class', 'submit');
        rowPhoneInput.append(inputFieldPhonenumber);

        let buttonMorePhone = document.createElement('button');
        let iForPhone = document.createElement('i');
        iForPhone.setAttribute('id', 'plus-phone');
        iForPhone.setAttribute('class', 'material-icons');
        iForPhone.innerHTML = 'exposure_plus_1';
        buttonMorePhone.setAttribute('class', 'btn-add-more-phone');
        buttonMorePhone.append(iForPhone);
        rowPhoneInput.append(buttonMorePhone);
        divForInputs.append(rowPhoneInput);

        let rowForEmail = document.createElement('row');
        rowForEmail.setAttribute('id', 'id-row-email');
        rowForEmail.setAttribute('class', 'row-for-email');

        let iEmail = document.createElement('i');
        iEmail.setAttribute('class', 'fas fa-envelope');
        rowForEmail.append(iEmail);

        let emailLabel = document.createElement('label');
        emailLabel.innerHTML = 'Email';
        emailLabel.setAttribute('class', 'label-email');
        rowForEmail.append(emailLabel);
        divForInputs.append(rowForEmail);

        let rowEmailInput = document.createElement('row');
        rowEmailInput.setAttribute('class', 'row-email-input');

        let inputFieldEmail = document.createElement('input');
        inputFieldEmail.setAttribute('type', 'text');
        inputFieldEmail.setAttribute('value', '');
        inputFieldEmail.setAttribute('id', 'email');
        inputFieldEmail.setAttribute('placeholder', 'Skriv in din email');
        inputFieldEmail.setAttribute('class', 'submit');
        rowEmailInput.append(inputFieldEmail);

        let buttonMoreEmail = document.createElement('button');
        let iForEmail = document.createElement('i');
        iForEmail.setAttribute('id', 'plus-email');
        iForEmail.setAttribute('class', 'material-icons');
        iForEmail.innerHTML = 'exposure_plus_1';
        buttonMoreEmail.setAttribute('id', 'btn-add-more-email');
        buttonMoreEmail.setAttribute('class', 'btn-add-more-email');
        buttonMoreEmail.append(iForEmail);
        rowEmailInput.append(buttonMoreEmail);
        divForInputs.append(rowEmailInput);

        let button = document.createElement('button');
        button.innerHTML = 'Lägg till';
        button.setAttribute('class', 'btn-add-name');
        button.setAttribute('id', 'btn-contact');
        divForInputs.append(button);
    }
}