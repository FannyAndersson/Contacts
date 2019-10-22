class Form extends App {
    constructor() {
        super()

        this.addForm();

    }


    addForm() {

        let body = document.body;

        let divForHeading = document.createElement('div');
        divForHeading.setAttribute('class', 'div-for-heading');
        body.append(divForHeading);

        let div = document.createElement('div');
        div.setAttribute('class', 'div-wrapper');
        divForHeading.append(div);

        let heading = document.createElement('h1');
        heading.setAttribute('class', 'heading')
        heading.innerHTML = 'Kontaktlista';
        div.append(heading);

        let form = document.createElement('form');
        form.setAttribute('class', 'form');
        form.setAttribute('id', 'id-form')
        body.append(form);

        let container = document.createElement('container');
        container.setAttribute('class', 'container');
        form.append(container);

        let divForInputs = document.createElement('div');
        container.append(divForInputs);

        let rowForName = document.createElement('row');
        rowForName.setAttribute('class', 'row-for-name');
        divForInputs.append(rowForName);

        let nameLabel = document.createElement('label');
        nameLabel.innerHTML = 'Namn';
        nameLabel.setAttribute('class', 'label');
        rowForName.append(nameLabel);

        let inputFieldName = document.createElement('input');
        inputFieldName.setAttribute('type', 'text');
        inputFieldName.setAttribute('value', '');
        inputFieldName.setAttribute('id', 'name');
        inputFieldName.setAttribute('placeholder', 'Skriv in ditt namn');
        inputFieldName.setAttribute('class', 'submit');
        rowForName.append(inputFieldName);

        let rowForPhoneNumber = document.createElement('row');
        rowForPhoneNumber.setAttribute('class', 'row-for-phonenumber');
        divForInputs.append(rowForPhoneNumber);

        let phoneNumberLabel = document.createElement('label');
        phoneNumberLabel.innerHTML = 'Telefonnummer';
        phoneNumberLabel.setAttribute('class', 'label');
        rowForPhoneNumber.append(phoneNumberLabel);

        let inputFieldPhonenumber = document.createElement('input');
        inputFieldPhonenumber.setAttribute('type', 'text');
        inputFieldPhonenumber.setAttribute('value', '');
        inputFieldPhonenumber.setAttribute('id', 'phone');
        inputFieldPhonenumber.setAttribute('placeholder', 'Skriv in ditt telefonnummer');
        inputFieldPhonenumber.setAttribute('class', 'submit');
        rowForPhoneNumber.append(inputFieldPhonenumber);

        let buttonMorePhone = document.createElement('button');
        buttonMorePhone.innerHTML = '+';
        buttonMorePhone.setAttribute('class', 'btn-add-more-phone');
        rowForPhoneNumber.append(buttonMorePhone);

        let rowForEmail = document.createElement('row');
        rowForEmail.setAttribute('class', 'ow-for-email');
        divForInputs.append(rowForEmail);

        let emailLabel = document.createElement('label');
        emailLabel.innerHTML = 'Email';
        emailLabel.setAttribute('class', 'label');
        rowForEmail.append(emailLabel);

        let inputFieldEmail = document.createElement('input');
        inputFieldEmail.setAttribute('type', 'text');
        inputFieldEmail.setAttribute('value', '');
        inputFieldEmail.setAttribute('id', 'email');
        inputFieldEmail.setAttribute('placeholder', 'Skriv in din email');
        inputFieldEmail.setAttribute('class', 'submit');
        rowForEmail.append(inputFieldEmail);

        let buttonMoreEmail = document.createElement('button');
        buttonMoreEmail.innerHTML = '+';
        buttonMoreEmail.setAttribute('class', 'btn-add-more-email');
        rowForEmail.append(buttonMoreEmail);

        let button = document.createElement('button');
        button.innerHTML = 'Lägg till kontakt';
        button.setAttribute('class', 'btn-add-name');
        button.setAttribute('id', 'btn-contact')
        divForInputs.append(button);


    }
}