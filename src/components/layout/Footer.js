import React from "react";
import "./style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Navbar, NavbarText, Nav } from "reactstrap";
library.add(fab);

function Footer() {
  return (
    <div>
      <Navbar color="dark" left="0" bottom="0" dark expand="md">
        <Nav>
          <NavbarText>Developed by chandra verma</NavbarText>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Footer;
