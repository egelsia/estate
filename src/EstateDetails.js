import {useParams} from "react-router-dom";
import useFetch from './useFetch';
import { url } from './api';

const EstateDetails = () => {
    const { id } = useParams();
    const {data: estate, error, isLoading } = useFetch(url + id);

    return (
        <div className="estate-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            { estate && (
              <article>
                <h1>{ estate.title }</h1>
                <img src={estate.image}/>
                <br />
                <h2>$ {estate.price} </h2>
                <p> {estate.description} </p>
                <br />
                <p>{ estate.seller } is selling this beautiful property!</p>
                <div>{ estate.body }</div>
              </article>
            
            )}
        </div>
    )
}

export default EstateDetails;