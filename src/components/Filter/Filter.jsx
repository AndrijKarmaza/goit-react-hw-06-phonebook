import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <label className={css.filter_label}>
      <span className={css.filter_text}>Find contct by name</span>
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
};

Filter.protoType = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
