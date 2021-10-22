import React from "react";
import {
  Form,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { FaSearch } from 'react-icons/fa';

const SearchChampions = ({ validateQTrack }) => (
  <Form>
    {/* <Row className="justify-content-md-center">
      <Col lg="4">
        <Form.Control placeholder="First name" />
      </Col>
      <Col lg="1">
        <Button type="submit" className="mb-2">
          Submit
        </Button>
      </Col>
    </Row> */}

    <Row className="justify-content-md-center">
      <Col lg="6" md="8" xs="12">
        <InputGroup className="mt-5 mb-5">
          <FormControl
            placeholder="Search Champion..."
            aria-label="Search Champion..."
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            <FaSearch/>
          </Button>
        </InputGroup>
      </Col>
    </Row>
  </Form>
);

// const SearchChampions = ({ validateQTrack }) => (
//   <Paper className="paper defaultPaper">
//     <TextField
//       id="q_track"
//       label="Track"
//       margin="normal"
//       variant="outlined"
//       onKeyPress={(e) => validateQTrack(e)}
//     />
//     <IconButton onClick={(e) => validateQTrack(e)}>
//       <SearchIcon />
//     </IconButton>
//   </Paper>
// );

export default SearchChampions;
