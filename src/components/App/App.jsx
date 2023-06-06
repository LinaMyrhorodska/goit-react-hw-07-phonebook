
import { GlobalStyle } from "../GlobalStyle";
import { Layout } from "../Layout/Layout";
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from "../Filter/Filter";
import { selectIsLoading, selectError } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { Loader } from "components/Loader/Loader";
export const App = () => {

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader/>}
      <ContactList />
      <GlobalStyle/>
    </Layout>
  )
};

