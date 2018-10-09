import React from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Row, Col, Card, CardBody, CardTitle, CardText, CardImg
} from "reactstrap";
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      'reviews': []
    }
  }
  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    fetch('https://user-tech-review.herokuapp.com/reviews/')
    .then(results => results.json())
    .then(results => this.setState({'reviews': results}));
  }
  render() {
    return (
      <ul>
      {this.state.reviews.map(function(review, index) {
        return <ReviewItem review={review} key={index} />
      })}
    </ul>
    );
  }
}

const ReviewItem = ({ review }) => (
  <Row className="ReviewItem">
    <Col xs="3" />
    <Col xs="12" sm="6">
      <Card>
        <CardImg top width="250" src={review.image_url}></CardImg>
        <CardBody>
          <CardTitle>
            {review.review_title}
          </CardTitle>
          <CardText>
            {review.user_review}
          </CardText>
        </CardBody>
      </Card>
    </Col>
  </Row>
)

export default App;
