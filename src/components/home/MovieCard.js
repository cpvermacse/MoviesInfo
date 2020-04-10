import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Card, CardImg, CardBody, CardSubtitle, Button, Col } from "reactstrap";

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <Col md="3">
        <Card>
          <CardImg
            top
            width="100%"
            height="300"
            src={movie.Poster}
            alt="Card image cap"
          />
          <CardBody>
            <CardSubtitle>
              {movie.Title}- {movie.Year}
            </CardSubtitle>
            <Link to={"/movie/" + movie.imdbID}>
              <Button>More Deatils ></Button>
            </Link>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default MovieCard;
