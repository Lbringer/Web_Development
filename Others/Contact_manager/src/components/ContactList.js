import React from "react";
import ContactCard from "./ContactCard";


const ContactList = (props) => {

    const deleteContact = (id) => {
        props.removeContact(id);
    }
    const renderContacts = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} deleteContact={deleteContact} key={contact.id}></ContactCard>
        );
    })
    return (
        < div className="container" >
            <h2 className="mb-3 mt-3 fw-light">Contact List</h2>
            {renderContacts}
        </div >
    );
}


export default ContactList;