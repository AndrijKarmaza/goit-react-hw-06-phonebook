import { useDispatch, useSelector } from 'react-redux';
import { filteredConcacts } from 'redux/filterSlice';
import { getFilterValue } from 'redux/selectors';
import css from './Filter.module.css';

export const Filter = () => {
  const value = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const filterContacts = evt => {
    dispatch(filteredConcacts(evt.currentTarget.value));
  };

  return (
    <label className={css.filter_label}>
      <span className={css.filter_text}>Find contct by name</span>
      <input type="text" value={value} onChange={filterContacts}></input>
    </label>
  );
};
