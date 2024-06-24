import React from 'react';

const ContactList = ({ contacts, onDelete, onEdit }) => {
    return (
        <div>
            <h3>Contact List</h3>
            <table>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Date of Birth</th>
                        <th>Education</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact, index) => (
                        <tr key={index}>
                            <td>{contact.fullname}</td>
                            <td>{contact.email}</td>
                            <td>{contact.gender}</td>
                            <td>{contact.dob}</td>
                            <td>{contact.education}</td>
                            <td>
                                <button onClick={() => onEdit(index)}>Edit</button>
                                <button onClick={() => onDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContactList;
