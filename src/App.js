import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {
   Jumbotron, Container, Col,  Media 
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
    fetch('http://127.0.0.1:8000/reviews/') 
    .then(results => results.json())
    .then(results => this.setState({'reviews': results}));
  }
  render() {
    return (

      <div className="wrap">
      <Jumbotron fluid className="top-header">
        <Container fluid>
        <Col md="5">
          <h1 className="display-5">Tech Product Reviews</h1>
          <p className="lead">Custom created Django REST APIs retrieved and rendered on the React Front-End.</p>
          </Col>
        </Container>
      </Jumbotron>

      <ul>
      {this.state.reviews.map(function(review, index) {
        return <ReviewItem review={review} key={index} />
      })}
    </ul>

     </div>
    );
  }
}

const ReviewItem = ({ review }) => (

  <div className="ReviewItem">

   <Media className="review-block">
      <Media left href="#">
        <Media src={review.image_url} />
      </Media>
      <Media body className="right-text">

        <h4>{review.review_title}</h4>

        <h6>User: {review.username}</h6>

        <h6>Product: {review.product}</h6>

        <p>"{review.user_review}"</p>
      </Media>
    </Media>
  </div>
)

export default App;
