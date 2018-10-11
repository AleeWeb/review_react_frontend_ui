import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {
   Jumbotron, Container, Row, Col,  Media 
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

      <div className="wrap">
      <Jumbotron fluid className="top-header">
        <Container fluid>
        
          <h1 className="display-5">Tech Product Reviews</h1>

          <Col md="5" lg="4">
          <p className="lead">Custom created Django REST APIs retrieved and rendered on the 
          React Front-End.</p>
          </Col>
        </Container>
      </Jumbotron>

      <ul>
      {this.state.reviews.map(function(review, index) {
        return <ReviewItem review={review} key={index} />
      })}
    </ul>

    <Container>
                    <Row>
                   <h6 className="credit">Created by 
                   <a
                        className="credit_link"
                        href="https://aleeweb.github.io/alicia-portfolio/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                       Alicia Alexander
                      </a>

                   </h6>
                
                   </Row>
                   
                </Container>

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
