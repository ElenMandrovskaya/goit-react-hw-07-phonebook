// import PropTypes from "prop-types";
import { useDispatch, useSelector } from 'react-redux';
import { Label, Input } from "./Filter.styled";
import { filterContacts } from "../../redux/contacts/contacts-actions";
import { getFilter } from '../../redux/contacts/contacts-selectors';

export function Filter() {
    const value = useSelector(getFilter);
    const dispatch = useDispatch();
    return (
        <Label>Find contacts by name
            <Input
                type="text"
                value={value}
                onChange={(e) => dispatch(filterContacts(e.currentTarget.value))}
                placeholder="Enter contact name"/>
        </Label>
    )
}

// Filter.propTypes = {
//     filterValue: PropTypes.string,
//     onChange: PropTypes.func,
// }

// export default Filter;