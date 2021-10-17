import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import ModalLogin from "./ModalLogin";

// import { useSelector, useDispatch } from "react-redux";
// import { setSection } from "../actions";
// import "../assets/styles/components/Header.scss";
// import Logo from "../assets/static/images/logo.png";

const Header = () => {
  //   const sectionActive = useSelector((state) => state.sectionActive);
  //   const dispatch = useDispatch();

  //   const handleSetSection = (section) => {
  //     dispatch(setSection(section));
  //   };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Favorite Legends</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Champions
            </Nav.Link>
            <Nav.Link as={Link} to="/favorites">
              Favorites
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={handleShow}>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <ModalLogin show={show} handleClose={handleClose} />
    </>
  );
};

export default Header;
