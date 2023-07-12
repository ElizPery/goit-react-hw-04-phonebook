import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { useState } from 'react';

export function ContactForm({onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();

        onSubmit(name, number);

        setName('');
        setNumber('');
    }

    const handleChangeData = ({ currentTarget }) => {
        const { name, value } = currentTarget;

        switch (name) {
          case 'name':
            setName(value);
            break;

          case 'number':
            setNumber(value);
            break;

          default:
            break;
        }
    }

    return (<form onSubmit={onFormSubmit} className={css.contactForm}>
        <label className={css.contactInputData}>
            Name
                <input
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    className={css.contactInputItem}
                    onChange={handleChangeData}
                    required
                />
            </label>
            <label className={css.contactInputData}>
                Number
                <input
                    type="tel"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    className={css.contactInputItem}
                    onChange={handleChangeData}
                    required
                />
            </label>
            <button type="submit" className={css.submitNewContact}>Add contact</button>
        </form>)
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}