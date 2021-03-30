import React from "react";
import { connect } from "react-redux";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import Nothing from "./components/Nothing";
import Loader from "./components/Loader.jsx";
import css from "./App.module.css";

const App = ({ contacts, isLoading }) => {
  return (
    <div className={css.wrapper}>
      <ContactForm />

      {contacts.length === 0 && <Nothing />}

      {contacts.length > 1 && <Filter />}

      {isLoading && <Loader />}

      {<ContactList />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
  isLoading: state.contacts.loading,
});

export default connect(mapStateToProps)(App);
