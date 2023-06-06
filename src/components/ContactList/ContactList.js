import { ContactItem, ContactName, ContactNumber, ContactBtn } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts} from '../../redux/selectors';
import { fetchContacts, deleteContact } from 'redux/operations';
import { useEffect } from 'react';

export const ContactList = () => {
    const filteredContacts = useSelector(selectFilteredContacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
    
  return (
        <ul>
            {filteredContacts.map(contact => {
                return (
                    <ContactItem key={contact.id}>
                        <ContactName>{contact.name}:</ContactName>
                        <ContactNumber>{contact.number}</ContactNumber>
                        <ContactBtn type="button" onClick={() => handleDelete(contact.id)}>
                           Delete
                        </ContactBtn>
                    </ContactItem>)
            })}
        </ul>
    )
};
