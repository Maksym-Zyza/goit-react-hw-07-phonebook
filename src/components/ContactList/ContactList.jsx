import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-actions';
import style from './ContactList.module.css';

const ContactList = ({ contacts, onDelBtnClick }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id} className={style.listItem}>
          <span className={style.name}>{contact.name}:</span>
          <span className={style.namber}>{contact.number}</span>
          <button
            className={style.btn}
            type="button"
            id={contact.id}
            onClick={event => onDelBtnClick(event.target.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = PropTypes.shape({
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired),
  onDelBtnClick: PropTypes.func.isRequired,
}).isRequired;

const contactListFilter = (items, filter) => {
  return items.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase()),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: contactListFilter(items, filter),
});

// const mapStateToProps = state => ({
//   contacts: state.contacts.items,
// });

const mapDispatchToProps = dispatch => ({
  onDelBtnClick: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
