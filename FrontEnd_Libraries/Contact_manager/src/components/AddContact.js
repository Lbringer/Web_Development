import React, { useState } from "react";

const AddContact = (props) => {

    const [contact, setContact] = useState({
        name: "",
        email: "",
        number: ""
    })
    const add = (e) => {
        e.preventDefault();
        if (contact.name === "" || contact.email === "" || contact.number === "") {
            alert("Form should be filled");
            return
        }
        props.addContact(contact);
        setContact((contact) => { return { ...contact, ...{ name: "", email: "", number: "" } } })
    }

    return (
        <div className="container">
            <form onSubmit={add}>
                <h2 className="fw-light">Add a Contact</h2>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name"
                        placeholder="name" value={contact.name}
                        onChange={(e) => { setContact((contact) => { return { ...contact, ...{ name: e.target.value } } }) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="email"
                        value={contact.email}
                        onChange={(e) => { setContact((contact) => { return { ...contact, ...{ email: e.target.value } } }) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="number" className="form-label">Number</label>
                    <input type="number" className="form-control" id="number" placeholder="number"
                        value={contact.number}
                        onChange={(e) => { setContact((contact) => { return { ...contact, ...{ number: e.target.value } } }) }} />
                </div>
                <button type="submit" className="btn btn-primary ">Add</button>
            </form>
        </div>
    );
}

export default AddContact