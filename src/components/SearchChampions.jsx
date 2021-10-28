import React, { useState, useEffect } from "react";
import {
  Form,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
// import { FaSearch } from "react-icons/fa";

const SearchChampions = (props) => {
  const [searchChamp, setSearchChamp] = useState("");

  const handleChange = (event) => {
    // props.SearchChampions(event.target.value)
    setSearchChamp(event.target.value);
  };

  useEffect(() => {
    props.getChampions(searchChamp);
  }, [searchChamp]);

  return (
    <Form>
      <Row className="justify-content-md-center">
        <Col lg="6" md="8" xs="12">
          <InputGroup className="mt-5 mb-5">
            <FormControl
              id="input_search"
              placeholder="Search Champion..."
              aria-label="Search Champion..."
              aria-describedby="basic-addon2"
              value={searchChamp}
              onChange={handleChange}
            />
            {/* {<Button
              variant="outline-secondary"
              id="button-search"
              // onClick={(e) => validateQTrack(e)}
            >
              <FaSearch />
            </Button>} */}
          </InputGroup>
        </Col>
      </Row>
    </Form>
  );
};


export default SearchChampions;
