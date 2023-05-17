import PropTypes from 'prop-types';
import css from './Filter.module.css'

const Filter = ({inputValue, onChangeData}) => (
    <label className={css.contactFilterData}>
        Find contacts by name
    <input
        type="text"
        name="filter"
        value={inputValue}
        onChange={onChangeData}  
        className={css.contactFilterItem}
        required
    />
    </label>
)

export default Filter;

Filter.propTypes = {
    inputValue: PropTypes.string.isRequired,
    onChangeData: PropTypes.func.isRequired
}