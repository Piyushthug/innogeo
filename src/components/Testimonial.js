import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Testimonial extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      }
    ]
  };
  render() {
    return (
      <section className="services-testimonial services">
        <div class="section-title">
          <h4>Partner</h4>
          <div></div>
        </div>
        <div className="services-center">
            <article key="satlab" className="service">
                <div>
                  <img src="https://www.satlab.com.se/wp-content/uploads/2022/01/hi-target-logo.png" alt="hi-target-logo" />
                </div>
                <div>
                  <img alt="" src="https://allterra.co.in/wp-content/uploads/2019/03/trimble_b_scale-to-any-size-300x72.png" />
                </div>
            </article>
        </div>
      </section>
    );
  }
}
