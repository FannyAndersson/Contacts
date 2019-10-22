let body = document.body;

let divForHeading = document.createElement('div');
divForHeading.setAttribute('class', 'div-for-heading')
body.append(divForHeading);

let div = document.createElement('div');
div.setAttribute('class', 'div-wrapper')
divForHeading.append(div);

let heading = document.createElement('h1');
heading.innerHTML = 'Kontaktlista';
div.append(heading);

let form = document.createElement('form');
form.setAttribute('class', 'form')
body.append(form);

let container = document.createElement('container');
container.setAttribute('class', 'div-form')
form.append(container);

let colForInputs = document.createElement('div');
container.append(colForInputs);

let rowForName = document.createElement('row');
rowForName.setAttribute('class', 'row-for-name');
colForInputs.append(rowForName);


let nameLabel = document.createElement('label');
nameLabel.innerHTML = 'Namn';
rowForName.append(nameLabel);

let inputFieldName = document.createElement('input');
inputFieldName.setAttribute('type', 'text');
inputFieldName.setAttribute('value', '');
inputFieldName.setAttribute('id', 'name')
inputFieldName.setAttribute('placeholder', 'Skriv in ditt namn')
inputFieldName.setAttribute('name', 'submit');
rowForName.append(inputFieldName);

let rowForPhoneNumber = document.createElement('row');
rowForPhoneNumber.setAttribute('class', 'row-for-phonenumber');
colForInputs.append(rowForPhoneNumber);

let phoneNumberLabel = document.createElement('label');
phoneNumberLabel.innerHTML = 'Telefonnummer';
rowForPhoneNumber.append(phoneNumberLabel);

let inputFieldPhonenumber = document.createElement('input');
inputFieldPhonenumber.setAttribute('type', 'text');
inputFieldPhonenumber.setAttribute('value', '');
inputFieldPhonenumber.setAttribute('id', 'phone')
inputFieldPhonenumber.setAttribute('placeholder', 'Skriv in ditt telefonnummer');
inputFieldPhonenumber.setAttribute('class', 'submit');
rowForPhoneNumber.append(inputFieldPhonenumber);

let buttonMorePhone = document.createElement('button');
buttonMorePhone.innerHTML = '+';
buttonMorePhone.setAttribute('class', 'btn-add-more-phone');
rowForPhoneNumber.append(buttonMorePhone);

let rowForEmail = document.createElement('row');
rowForEmail.setAttribute('class', 'ow-for-email');
colForInputs.append(rowForEmail);

let emailLabel = document.createElement('label');
emailLabel.innerHTML = 'Email';
rowForEmail.append(emailLabel);

let inputFieldEmail = document.createElement('input');
inputFieldEmail.setAttribute('type', 'text');
inputFieldEmail.setAttribute('value', '');
inputFieldEmail.setAttribute('id', 'email');
inputFieldEmail.setAttribute('placeholder', 'Skriv in din email')
inputFieldEmail.setAttribute('class', 'submit');
rowForEmail.append(inputFieldEmail);

let buttonMoreEmail = document.createElement('button');
buttonMoreEmail.innerHTML = '+';
buttonMoreEmail.setAttribute('class', 'btn-add-more-email');
rowForEmail.append(buttonMoreEmail);

let button = document.createElement('button');
button.innerHTML = 'Lägg till kontakt';
button.setAttribute('class', 'btn-add-contact')
document.body.append(button)


// let div = document.createElement('div');
// div.setAttribute('class', 'div-css')
// body.append(div);
// let ul = document.createElement('ul');
// ul.setAttribute('class', 'ul-list');
// div.append(ul);


// let person = {
//     name: '',
//     phone: [],
//     number: []
// }





// const userPrototype = {

//     myStuff() {


//         window.addEventListener('click', e => {
//             if (e.target.closest('.btn-add-name')) {
//                 let valOfInput = document.querySelectorAll('input[value=""]')
//                 let valOfInputIdName = valOfInput[0].value;
//                 console.log(valOfInputIdName, 'valof')
//                 if (valOfInputIdName === '') {
//                     let person = new User();
//                     console.log(person, 'person')

//                 }

// const myObj = [].reduce.call(valOfInput, (acc, cur) => {
//     acc[cur.id] = cur.value;
//     return acc;
// }, {});
// let person = new User(...myObj.name);

// localStorage.setItem('contact', JSON.stringify(arrayWrapper));
// }
// if (e.target.closest('.btn-add-more-phone')) {
//     let valOfPhoneInput = document.querySelector('#phone').value;
//     arrayWrapper.push(valOfPhoneInput);
//     console.log(valOfPhoneInput, 'hej')
//     console.log(arrayWrapper, 'jdal');

// }


//         });
//     }
// }


// valOfInput.forEach((val, i) => {
//     myObj[val[i]] = val[i].value;
// for (let i = 0; i < valOfInput.length; i++) {
//     myObj[valOfInput[i].id] = valOfInput[i].value;
//     console.log(myObj, 'objekt')
// }

// let arr = [];
// for (key in myObj) {
//     if (myObj.hasOwnProperty(key)) {
//         arr.push(key, myObj[key])
//         console.log(arr.join(''))
//     }
// }
// for (let [key, val] of Object.entries(myObj)) {
//     keyAndVal = [key, val]
//     console.log(keyAndVal, 'mythings')
// }
// let li = document.createElement('li');
// li.setAttribute('class', 'li-list');
// li.append(myObj);
// ul.append(li);

// let myLi = val.value;
// });
//             }
//         });
//     },

// }





// function User(name, email = [], phone = []) {
//     let newInstance = Object.create(userPrototype);
//     newInstance.name = name;
//     newInstance.email = email instanceof Array ? email : [email];
//     newInstance.phone = phone instanceof Array ? phone : [phone];
//     return newInstance;
// }


// userPrototype.myStuff()