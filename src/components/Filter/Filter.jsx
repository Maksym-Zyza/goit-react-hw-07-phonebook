import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-actions';
import style from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <div className={style.wrapper}>
      <label className={style.label}>
        <span className={style.name}>Find contacts by name</span>
        <input
          className={style.input}
          type="text"
          name="name"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

Filter.propTypes = PropTypes.shape({
  value: PropTypes.string,
  onChange: PropTypes.func,
}).isRequired;

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.filterContacts(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
