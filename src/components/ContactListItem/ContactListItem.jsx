import PropTypes from 'prop-types';
import css from './ContactListItem.module.css'

const ContactListItem = ({id, name, number, deleteContact}) => (
    <li className={css.listItemOfContacts}>
        <p className={css.nameOfContact}>{name}: {number}</p>
        <button className={css.deleteBtn} type='button' onClick={() => deleteContact(id)}>Delete</button>
    </li>
)

export default ContactListItem;

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired
}