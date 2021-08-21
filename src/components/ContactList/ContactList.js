import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { List, Item, Button } from "./ContactList.styled";
import { removeContact, fetchContacts } from "../../redux/contacts/contacts-operations";
import { getAllContacts } from "../../redux/contacts/contacts-selectors";


export function ContactList() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const contacts = useSelector(getAllContacts);

    return (
        <List>
            {contacts.map(({ id, name, number }) => (
                <Item key={id}>
                    {name}: {number}
                    <Button onClick={() => dispatch(removeContact(id))}>
                        Delete
                    </Button>
                </Item>
            ))}
        </List>
    )
}

