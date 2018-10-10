import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {
   Jumbotron, Container,  Media 
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

      <div>
      <Jumbotron fluid className="top-header">
        <Container fluid>
          <h1 className="display-5">Tech Product Reviews</h1>
          <p className="lead">Custom created Django REST API Endpoints retrieved and rendered on the React Front-End.</p>
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

   <Media>
      <Media left href="#">
        <Media src={review.image_url} />
      </Media>
      <Media body>

        <Media heading> 
        {review.review_title}
        </Media>

        <h6>User: {review.username}</h6>

        <p>"{review.user_review}"</p>
      </Media>
    </Media>


  </div>
)

export default App;
