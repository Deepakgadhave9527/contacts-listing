import React, { useEffect, useState } from "react";

const AddContact = ({ addContact, editContact, contactToEdit }) => {
    const [form, setForm] = useState({
        fullname: '',
        email: '',
        gender: '',
        dob: '',
        education: '',
    });

    useEffect(() => {
        if (contactToEdit) {
            setForm(contactToEdit);
        } else {
            setForm({
                fullname: '',
                email: '',
                gender: '',
                dob: '',
                education: '',
            });
        }
    }, [contactToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.fullname || !form.email || !form.gender || !form.dob || !form.education) {
            alert('Please fill all required fields');
            return;
        }
        if (contactToEdit) {
            editContact(form);
        } else {
            addContact(form);
        }
        setForm({
            fullname: '',
            email: '',
            gender: '',
            dob: '',
            education: '',
        });
    };

    return (
        <div>
            <h3>Add Contact</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="fullname" value={form.fullname} onChange={handleChange} placeholder="Full Name" required />
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
                <select name="gender" value={form.gender} onChange={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <input type="date" name="dob" value={form.dob} onChange={handleChange} required />
                <input type="text" name="education" value={form.education} onChange={handleChange} placeholder="Education" required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddContact;
