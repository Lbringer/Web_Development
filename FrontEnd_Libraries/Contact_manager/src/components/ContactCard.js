import React from "react";


const ContactCard = ({ contact, deleteContact }) => {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title mb-3 fw-light fs-3">{contact.name}</h5>
                <h6 className="card-title fw-normal mb-3">{contact.number}</h6>
                <h6 className="card-subtitle mb-3 text-muted">Email : {contact.email}</h6>
                <button type="button" class="btn btn-outline-danger btn-sm" onClick={() => deleteContact(contact.id)}>Delete</button>
            </div>
        </div>
    );
}

export default ContactCard;