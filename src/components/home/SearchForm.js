import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Jumbotron, Container } from "reactstrap";
import { Button, Form, FormGroup, Input } from "reactstrap";
import {
  searchMovie,
  fetchMovies,
  setLoading,
} from "../../actions/searchActions";

export class SearchForm extends Component {
  onChanger = (e) => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };
  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid className="text-center">
            <h2 className="">
              {" "}
              <FontAwesomeIcon icon={faSearch} />
              Search for a movie, TV Series
            </h2>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  name="searchText"
                  id="searchText"
                  placeholder="type movie name to search"
                  onChange={this.onChanger}
                />
              </FormGroup>

              <Button>Search</Button>
            </Form>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  text: state.movies.text,
});
export default connect(mapStateToProps, {
  searchMovie,
  fetchMovies,
  setLoading,
})(SearchForm);
