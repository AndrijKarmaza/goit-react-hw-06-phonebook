import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contact_list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contact_item} key={id}>
          <p className={css.contact_data}>
            {name} : {number}
          </p>
          <button
            className={css.contact_btn}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.protoType = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
