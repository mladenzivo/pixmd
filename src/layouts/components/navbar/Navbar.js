import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  Collapse,
  NavbarToggler,
} from "reactstrap";
import classnames from "classnames";
import NavbarUser from "./NavbarUser";
import userImg from "../../../assets/img/portrait/small/avatar-s-11.jpg";

const ThemeNavbar = (props) => {
  const colorsArr = ["primary", "danger", "success", "info", "warning", "dark"];
  const navbarTypes = ["floating", "static", "sticky", "hidden"];
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
      <div className="content-overlay" />
      <div className="header-navbar-shadow" />
      <Navbar
        className={classnames(
          "header-navbar navbar-expand-lg navbar navbar-with-menu navbar-shadow",
          {
            "navbar-light":
              props.navbarColor === "default" ||
              !colorsArr.includes(props.navbarColor),
            "navbar-dark": colorsArr.includes(props.navbarColor),
            "bg-primary":
              props.navbarColor === "primary" && props.navbarType !== "static",
            "bg-danger":
              props.navbarColor === "danger" && props.navbarType !== "static",
            "bg-success":
              props.navbarColor === "success" && props.navbarType !== "static",
            "bg-info":
              props.navbarColor === "info" && props.navbarType !== "static",
            "bg-warning":
              props.navbarColor === "warning" && props.navbarType !== "static",
            "bg-dark":
              props.navbarColor === "dark" && props.navbarType !== "static",
            "d-none": props.navbarType === "hidden" && !props.horizontal,
            "floating-nav":
              (props.navbarType === "floating" && !props.horizontal) ||
              (!navbarTypes.includes(props.navbarType) && !props.horizontal),
            "navbar-static-top":
              props.navbarType === "static" && !props.horizontal,
            "fixed-top": props.navbarType === "sticky" || props.horizontal,
            scrolling: props.horizontal && props.scrolling,
          }
        )}
        style={{ margin: 20 }}
      >
        <div className="navbar-wrapper">
          <div className="navbar-container content">
            <div
              className="navbar-collapse d-flex justify-content-between align-items-center"
              id="navbar-mobile"
            >
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  {props.horizontal ? (
                    <div className="logo d-flex align-items-center">
                      <NavbarBrand
                        className="text-primary brand-text mb-0"
                        href="/"
                      >
                        PIXMD
                      </NavbarBrand>
                    </div>
                  ) : null}
                  <NavItem>
                    <NavLink href="#">DOCTORS</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">PROCEDURES</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">PRICEING</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">BLOG</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">CONTACT</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
              {!props.user.isAuthenticated ? (
                <Nav>
                  <NavItem>
                    <NavLink className="text-white" href="/register">SIGN UP</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="text-white" href="/sign-in">SIGN IN</NavLink>
                  </NavItem>
                </Nav>
              ) : (
                <NavbarUser
                  handleAppOverlay={props.handleAppOverlay}
                  changeCurrentLang={props.changeCurrentLang}
                  userName="John Doe"
                  userImg={userImg}
                  userSignOut={props.userSignOut}
                />
              )}
            </div>
          </div>
        </div>
      </Navbar>
    </React.Fragment>
  );
};

export default ThemeNavbar;
