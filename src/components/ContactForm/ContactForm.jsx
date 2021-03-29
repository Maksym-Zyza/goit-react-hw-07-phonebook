import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-actions';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handelChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value, id: uuidv4() });
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  handleSabmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { contacts } = this.props;

    if (contacts.some(contact => contact.name === name)) {
      return alert(`Name "${name}" already exists, please enter another name.`);
    } else this.props.onSubmit({ name, number, id: uuidv4() });

    this.resetForm();
  };

  render() {
    const { contacts } = this.props;
    return (
      <>
        <div>
          <h1 className={css.title}>Phonebook</h1>
          <form
            className={css.form}
            autoComplete="off"
            onSubmit={this.handleSabmit}
          >
            <label className={css.label}>
              Name:
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handelChange}
                className={css.input}
              />
            </label>
            <label className={css.label}>
              Number:
              <input
                type="tel"
                name="number"
                value={this.state.number}
                onChange={this.handelChange}
                className={css.input}
              />
            </label>
            <button type="submit" className={css.btn}>
              Add contact
            </button>
          </form>
          <h2 className={css.title}>Contacts ({contacts.length})</h2>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: obj => dispatch(actions.addContact(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
