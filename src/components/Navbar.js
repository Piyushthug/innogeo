import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from "../images/Picture2.png";

import { RoomContext } from "../context";


export default class Navbar extends Component {
  static contextType = RoomContext;




  state = {
    isOpen: false,
    hover: false,
    display: 'none'
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  toggleHover = () => {
    this.setState({ hover: !this.state.hover })
  }

  render() {
    let { loading, typeRooms: rooms } = this.context;
    // console.log(rooms);
    var linkStyle;
    if (this.state.hover) {
      linkStyle = { display: 'block' }
    } else {
      linkStyle = { display: 'none' }
    }
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Beach Resort"/>
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
              <Link className="dropdown" to="/rooms/all">Rooms</Link>
              <ul style={linkStyle} className="dropdown-content dropdown-prducts">
                {/* <li> <Link to="/rooms">Rooms</Link> </li>
                <li> <Link to="/rooms">Rooms</Link> </li>
                <li> <Link to="/rooms">Rooms</Link> </li> */}
                {rooms.map(type => {
                  // <li> <Link to="/rooms">Rooms</Link> </li>;
                  // console.log(type);
                  // <li> <Link to="/rooms">Rooms</Link> </li>;
                  // <li> <Link to="/rooms">Rooms</Link> </li>;
                  return <li> <Link to={`/rooms/${type}`} >{type}</Link></li>;
                })}
              </ul>
            </li>
            <li>
              <Link to="/about-us">About</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
