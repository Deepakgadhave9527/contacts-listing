import React, { useState, useEffect } from 'react';
import ContactList from './ContactList';
import AddContact from './AddContact';

const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    const [contactToEdit, setContactToEdit] = useState(null);

    useEffect(() => {
        const storedContacts = JSON.parse(localStorage.getItem("contacts"));
        if (storedContacts) {
            setContacts(storedContacts);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts]);

    const addContact = (newContact) => {
        setContacts([...contacts, newContact]);
    };

    const deleteContact = (index) => {
        const updatedContacts = contacts.filter((val, i) => i !== index);
        setContacts(updatedContacts);
    };

    const editContact = (updatedContact) => {
        const updatedContacts = contacts.map((contact, index) =>
            index === contactToEdit.index ? updatedContact : contact
        );
        setContacts(updatedContacts);
        setContactToEdit(null);
    };

    const handleEdit = (index) => {
        setContactToEdit({ ...contacts[index], index });
    };

    return (
        <div>
            <AddContact addContact={addContact} editContact={editContact} contactToEdit={contactToEdit} />
            <ContactList contacts={contacts} onDelete={deleteContact} onEdit={handleEdit} />
        </div>
    );
};

export default Contacts;
