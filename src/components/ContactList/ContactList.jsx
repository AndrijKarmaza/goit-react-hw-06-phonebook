import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import css from './ContactList.module.css';
import { getContacst, getFilterValue } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacst);
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const normalisedFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalisedFilter)
  );

  return (
    <ul className={css.contact_list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={css.contact_item} key={id}>
          <p className={css.contact_data}>
            {name} : {number}
          </p>
          <button
            className={css.contact_btn}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
