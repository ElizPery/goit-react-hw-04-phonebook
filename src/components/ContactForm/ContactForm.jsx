import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import {Component} from 'react'

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    onSubmit = (e) => {
        e.preventDefault()

        this.props.onSubmit(this.state);
        
        this.setState({
            name: '',
            number: ''
        })
    }

    handleChangeData = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    this.setState({
      [name]: value,
    })
  }

    render() {
        const { name, number } = this.state;
        return (<form onSubmit={this.onSubmit} className={css.contactForm}>
            <label className={css.contactInputData}>
                Name
                <input
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    className={css.contactInputItem}
                    onChange={this.handleChangeData}
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
                    onChange={this.handleChangeData}
                    required
                />
            </label>
            <button type="submit" className={css.submitNewContact}>Add contact</button>
        </form>)
    }
}

export default ContactForm;

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

