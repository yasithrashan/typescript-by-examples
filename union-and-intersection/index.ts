type StringOrNumber = string | number;

function acceptVal(val: StringOrNumber) {
}

interface BusinessPartner {
    name: string;
}

interface ContactDetails {
    email: string;
    phone: string;
}

type BusinessContact = BusinessPartner & ContactDetails

const contact: BusinessContact = {
    name: "John Doe",
    email: "johndoe@gmail.com",
    phone: "123-456-7890"
}

interface Individual {
    name: string;
    birthdate: Date;
}

interface Organization {
    comapnyName: string;
    workPhone: string;
}

type ContactType = Individual | Organization;

type CompContact = Individual & Organization;

function addContact(contact: ContactType) {
    if ('birthdate' in contact) {
        console.log(`Individual Contact: ${contact.name}, Birthdate: ${contact.birthdate}`);
    } else {
        console.log(`Organization Contact: ${contact.comapnyName}, Work Phone: ${contact.workPhone}`);
    }
}

addContact({
    name: "Jane Smith",
    birthdate: new Date('1990-01-01')
});