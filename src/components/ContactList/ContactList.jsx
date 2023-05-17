import PropTypes from 'prop-types'
import ContactListItem from "components/ContactListItem";
import css from './ContactList.module.css'

const ContactList = ({contacts, deleteContact}) => (
    <ul className={css.listOfContacts}>{contacts.map(element => {
        return <ContactListItem
            key={element.id}
            id={element.id}
            name={element.name}
            number={element.number}
            deleteContact={deleteContact} />
    })}</ul>
)

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
    deleteContact: PropTypes.func.isRequired
}