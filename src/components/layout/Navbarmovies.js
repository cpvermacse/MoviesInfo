import React from "react";
import "./style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
library.add(fab);

function Navbarmovies() {
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">MoviesSeriesInfo</NavbarBrand>
        <Nav className="ml-auto">
          <NavItem>
            <FontAwesomeIcon
              icon={["fab", "imdb"]}
              style={{ color: "yellow" }}
              size="4x"
            />
          </NavItem>
          <NavItem>
            <FontAwesomeIcon
              icon={["fab", "react"]}
              style={{ color: "blue" }}
              size="4x"
            />
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navbarmovies;
