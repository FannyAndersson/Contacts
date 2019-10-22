class App {
    constructor() {


    }
    createDOM() {
        this.listen();
        this.form = new Form();
    }
    listen() {
            window.addEventListener('click', e => {
                if (e.target.closest('#btn-contact')) this.saveContact();
            });
        }
        //
    saveContact() {
        let inputValues = document.querySelectorAll('input[type="text"]');

        this.data = [].reduce.call(
            inputValues,
            (acc, cur) => {
                acc[cur.id] = cur.value;
                return acc;
            }, {}

        );


        this.saveContactToLocalStorage(this.data);
        this.getMyContact();
    }

    getMyContact() {

        let n = this.data;
        console.log(n, 'fsdfs')

    }


    // Save multiple contacts to localStorage
    saveContactToLocalStorage(data) {
        // see if there are any contacts
        // if there is push in the new data
        // if not, the catch will pick it up and create it
        // so no error will occure
        try {
            const contacts = JSON.parse(localStorage.contacts);
            console.log(contacts);
            contacts.push(data);
            localStorage.setItem('contacts', JSON.stringify(contacts));
            console.log('try');
        } catch (e) {
            localStorage.setItem('contacts', JSON.stringify([data]));
            console.log('catch');
        }
    }
}