import { Input } from 'reactstrap';
import PropTypes from 'prop-types';


const Filter=({setFilterhRecipe})=>{
    return(
        <div className='container'>
        
        <Input className='form-control rounded-pill border-0 shadow-sm px-4' style={{ padding:`0 0.5rem`,width: `50%`,color: `#555`}} onChange={e => setFilterhRecipe(e.target.value)}  placeholder='Search Food' />

        </div>
        
        
    )
}
Filter.propTypes = {
  setFilterhRecipe: PropTypes.func.isRequired,
  
};
export default Filter;