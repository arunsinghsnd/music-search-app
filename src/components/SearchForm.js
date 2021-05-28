import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchForm = props => {
  // this is state created
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // this is method for handleInputChange

  const handleInputChange = event => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  // this method is for Searching
  const handleSearch = event => {
    event.preventDefault();
    if (searchTerm.trim() !== "") {
      setErrorMsg("");
      props.handleSearch(searchTerm);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSearch}>
        {errorMsg && <p className="errrorMsg">{errorMsg}</p>}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter Search term</Form.Label>
          <Form.Control
            type="search"
            name="searchTerm"
            value={searchTerm}
            placeholder="Search for ablum, artist or playlist"
            onChange={handleInputChange}
            autocomplete="off"
          />
        </Form.Group>
        <Button variant="info" type="submit">
          Search
        </Button>
      </Form>
    </div>
  );
};

export default SearchForm;
