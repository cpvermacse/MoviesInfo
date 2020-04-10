import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import {
  Container,
  Row,
  Col,
  CardImg,
  ListGroup,
  ListGroupItem,
  Button,
} from "reactstrap";
import { fetchMovie, setLoading } from "../../actions/searchActions";
export class Movies extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.setLoading();
  }
  render() {
    const { loading, movie } = this.props;

    let movieInfo = (
      <Container>
        <Row>
          <Col md="4">
            <CardImg
              top
              width="100%"
              height="75%"
              src={movie.Poster}
              alt="Card image cap"
            />
          </Col>
          <Col md="8">
            <Row>
              <h3>{movie.Title}</h3>
            </Row>
            <ListGroup>
              <ListGroupItem>
                <strong>Genre:</strong>
                {movie.Genre}
              </ListGroupItem>
              <ListGroupItem>
                <strong>Released:</strong>
                {movie.Released}
              </ListGroupItem>
              <ListGroupItem>
                <strong>Rated:</strong>
                {movie.Rated}
              </ListGroupItem>
              <ListGroupItem>
                <strong>IMDB Rating:</strong>
                {movie.imdbRating}
              </ListGroupItem>
              <ListGroupItem>
                <strong>Director:</strong>
                {movie.Director}
              </ListGroupItem>
              <ListGroupItem>
                <strong>Writer:</strong>
                {movie.Writer}
              </ListGroupItem>
              <ListGroupItem>
                <strong>Actors:</strong>
                {movie.Actors}
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <h3>About</h3>
        </Row>
        <Row>
          <h5>{movie.Plot}</h5>
        </Row>
        <Row>
          <Col md="6">
            <a
              href={"https://www.imdb.com/title/" + movie.imdbID}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View on IMDB
            </a>
          </Col>
          <Col md="6" a>
            <Link to="/">
              <Button>Go Back To Search</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
    let content = loading ? <Spinner /> : movieInfo;
    return <div>{content}</div>;
  }
}
const mapStateToProps = (state) => ({
  loading: state.movies.loading,
  movie: state.movies.movie,
});
export default connect(mapStateToProps, { fetchMovie, setLoading })(Movies);
