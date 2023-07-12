import { useState, useEffect} from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

export function App() {
  const defaultContacts = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
    
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? defaultContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ( name, number ) => {
    const newUser = {
      name,
      number,
      id: nanoid(),
    };

    if (
      contacts.find(
        contact =>
          contact.name.toLocaleLowerCase() ===
            newUser.name.toLocaleLowerCase() ||
          contact.number === newUser.number
      )
    ) {
      alert(`${newUser.name} or ${newUser.number} is already in contacts`);
      return;
    }

    setContacts(prev => ([...prev, newUser]));
  };

  const handleChangeData = ({ currentTarget }) => {
    const { value } = currentTarget;
    setFilter(value);
  };

  const handleFilter = () => {
    const filterData = filter.toLocaleLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filterData)
    );
  };

  const handleDeleteContact = id => {
    setContacts(prev => (prev.filter(element => element.id !== id)));
  };

 return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter
          inputValue={filter}
          onChangeData={handleChangeData}
        />
        <ContactList
          contacts={handleFilter()}
          deleteContact={handleDeleteContact}
        />
      </div>
    );
}