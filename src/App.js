import React from 'react';
import { connect } from 'react-redux';
// import Counter from './components/Counter';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import Nothing from './components/Nothing';
import css from './App.module.css';

const App = ({ contacts }) => {
  return (
    <div className={css.wrapper}>
      {/* <h1 className={css.title}>Counter</h1>
        <Counter /> */}

      <ContactForm />

      {contacts.length === 0 && <Nothing />}

      {contacts.length > 1 && <Filter />}

      {<ContactList />}
    </div>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts.items,
  filter: state.contacts.filter,
});

export default connect(mapStateToProps)(App);
