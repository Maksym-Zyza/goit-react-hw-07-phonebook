import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as operations from "../../redux/contacts/contacts-operations";
import style from "./ContactList.module.css";

class ContactList extends React.Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts, onDelBtnClick } = this.props;
    console.log("contacts>>", contacts);
    return (
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} className={style.listItem}>
            <span className={style.name}>{contact.name}:</span>
            <span className={style.namber}>{contact.number}</span>
            <button
              className={style.btn}
              type="button"
              id={contact.id}
              onClick={(event) => onDelBtnClick(event.target.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = PropTypes.shape({
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired),
  onDelBtnClick: PropTypes.func.isRequired,
}).isRequired;

const contactListFilter = (items, filter) => {
  return items.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: contactListFilter(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDelBtnClick: (id) => dispatch(operations.deleteContact(id)),
  fetchContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
