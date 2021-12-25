import React, { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {

  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Aditya G",
  //     email: "Aditya@gmail.com",
  //     number: 7989021203
  //   },
  //   {
  //     id: "2",
  //     name: "Projukta M",
  //     email: "Projukta@gmail.com",
  //     number: 7738172351
  //   }

  // ]
  const [contacts, setContacts] = useState([])

  const addContact = (contact) => {
    console.log(contacts);
    setContacts((contacts) => { return [...contacts, { id: uuid(), ...contact }] })
    console.log(contacts);
  }

  const removeContact = (id) => {
    const newContacts = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContacts);
  }

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem('contact'));
    if (retriveContacts) {
      setContacts(retriveContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contact', JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="container">
      <Header></Header>
      <AddContact addContact={addContact}></AddContact>
      <ContactList contacts={contacts} removeContact={removeContact}></ContactList>
    </div>

  );
}

export default App;
