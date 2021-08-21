import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-operations';
import { Form, Label, Input, Button } from "./ContactForm.styled";

export function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const nameId = uuidv4();
  const telId = uuidv4();
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
    };
    
    const handleSubmit = (evt) => {
      evt.preventDefault();
      dispatch(addContact({name, number}))
      resetForm();
   };

   const resetForm = () => {
    setName("");
    setNumber("");
   };
  return (
      <Form onSubmit={handleSubmit}>
        <Label htmlFor={nameId}> Name
          <Input
            id={nameId}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            placeholder="Enter contact name"
            required
          />
        </Label>

        <Label htmlFor={telId}> Phone Number
          <Input
            id={telId}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            placeholder="Enter phone number"
            required
          />
        </Label>

        <Button type="submit">
          Add contact
        </Button>
      </Form>
    );
}