import EstateList from './EstateList';
import useFetch from './useFetch'
import { url } from './api';
import { Row, Col } from 'reactstrap';

const AllEstates = () => {
    const {data: estates, isLoading, error} = useFetch(url);

    return ( 
        <div className="AllEstates">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div> }
            {estates && 
                <EstateList estates={estates} title="All Estates" />
            }
        </div>
     );
}

export default AllEstates;