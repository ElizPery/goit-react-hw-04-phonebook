import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const initialData = localStorage.getItem('contacts');
    const parsedData = JSON.parse(initialData);
    if (parsedData) {
      this.setState({
        contacts: parsedData,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
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

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newUser] };
    });
  };

  handleChangeData = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleFilter = () => {
    const filterData = this.state.filter.toLocaleLowerCase().trim();

    return this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filterData)
    );
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(element => element.id !== id),
    }));
  };

  render() {
    const visibleContacts = this.handleFilter();
    const { filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter
          inputValue={filter}
          onChangeData={this.handleChangeData}
        />
        <ContactList
          contacts={visibleContacts}
          deleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}

export default App;
