import { useSelector, useDispatch } from "react-redux";
import { List, Item, Button } from "./ContactList.styled";
import { removeContact } from "../../redux/contacts/contacts-actions";
import { getFiltredContacts } from "../../redux/contacts/contacts-selectors";


export function ContactList() {
    // const contacts = useSelector((state) =>
    //     // state.items
    //      state.items.filter(item => item.name.toLowerCase().includes(state.filter.toLowerCase()))  
    // );
    const contacts = useSelector(getFiltredContacts);
    const dispatch = useDispatch();

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

