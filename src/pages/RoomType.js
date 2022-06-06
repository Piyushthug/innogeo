import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link} from "react-router-dom";
import { RoomContext } from "../context";
import RoomsContainer from "../components/RoomsContainer";

import StyledHero from "../components/StyledHero";
export default class RoomType extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    // let {type} = useParams();
    this.state = {
      type: this.props.match.params.type,
      defaultBcg: defaultBcg
    };
  }
  static contextType = RoomContext;
  

  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    // const { getRoom } = this.context;
    // console.log(getRoom);
    const roomType = this.props.match.params.type;
    console.log(roomType);
   return (
      <>
        <Hero hero="roomsHero">
        <Banner title="our products">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer roomType = {roomType} />
      </>
    );
  }
}
