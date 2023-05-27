import { Link } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Row, Col, Button } from 'reactstrap';
import axios from 'axios'
import {url} from './api'

const postDelete = (id, e) => {
  e.preventDefault();
  axios.delete(`${url}${id}`)
  .then(res => console.log('Deleted', res)).catch(err => console.log(err))
}


const EstateList = ({ estates, title }) => {
  return (
    <div className="estate-list">
      <Row>
        {estates.map((estate) => (
          <Col key={estate.id} lg="4" md="6" sm="12">
            <div className="estate-preview">
              <Link to={`/estates/${estate.id}`}>
                <Card>
                  <CardImg alt="Card image cap" src={estate.image} top width="100%" />
                  <CardBody>
                    <CardTitle tag="h5">{estate.title}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">${estate.price}</CardSubtitle>
                    <CardText>{estate.body}</CardText>
                    <Button onClick={(e) => postDelete(estate.id, e)}>Delete</Button>
                  </CardBody>
                </Card>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default EstateList;
