import React, { useState, createContext } from "react";

// Create Context Object
export const ContactsContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const ContactsContextProvider = props => {

    let contactList = []

  const [contacts, setContacts] = useState(contactList);

  return (
    <ContactsContext.Provider value={[contacts, setContacts]}>
      {props.children}
    </ContactsContext.Provider>
  );
};