import useFetch from './useFetch';
import React, { useState, useEffect } from "react";
import { url } from './api';
import { Container, Row, Col } from 'reactstrap';


const randomNumber = () => {
    return Math.floor(Math.random() * 9 + 1);
  };

  const Home = () => {
    const [estateId, setEstateId] = useState(randomNumber());
    const randomEstate = `${url}${estateId}`
    const { data: estate, error, isLoading } = useFetch(randomEstate);
  
    return (
      <Container>
        <Row>
          <Col>
            <div className="estate-details">
              {isLoading && <div>Loading...</div>}
              {error && <div>{error}</div>}
              {estate && (
                <article>
                  <h1>{estate.title}</h1>
                  <img src={estate.image} alt={estate.title} />
                  <h2>${estate.price}</h2>
                  <br />
                  <p>{estate.description}</p>
                  <br />
                  <p>{estate.seller} is selling this beautiful property!</p>
                  <div>{estate.body}</div>
                </article>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  

export default Home;