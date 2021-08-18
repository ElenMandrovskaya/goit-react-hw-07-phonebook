import { ToastContainer } from 'react-toastify';
import { Main, Section, MainTitle } from './App.styled';
import { ContactForm } from "../components/ContactForm/ContactForm";
import { ContactList } from "../components/ContactList/ContactList";
import { Filter } from "../components/Filter/Filter";
import { Title } from "../components/Title/Title";

export default function App() {

  return (
    <>
      <MainTitle>Phonebook</MainTitle>
      <Main>
        <Section>
          <Title title={"Add contact"} />
          <ContactForm/>
        </Section>
        <Section>
          <Title title="Search contact" />
          <Filter />
        </Section>
        <Section>
          <Title title="Contacts"/>
          <ContactList />
        </Section>
      </Main>
      <ToastContainer />
      </>
  )
}



