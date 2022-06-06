import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import Title from "./Title";
// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const RoomsFilter = ({ rooms }) => {
  // react hooks
  const context = useContext(RoomContext);
  const {
    handleChange,
    handleClick,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  // get unique types
  let types = getUnique(rooms, "type");
  // add all
  types = ["Products", ...types];
  // map to jsx
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  // get unique capacity
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  return (
    <>
      <section className="category-filter">
        <h3 class="accor-title">Categories</h3>
        <ul className="category-filter-ul">
          {types.map(type => (
            <li name="type"
              id="type"
              onClick={handleClick}
              className="category-filter-li"
              value={type} >

              {type}
              

            </li>
          ))}
          
        </ul>

      </section>

    </>
  );
};

export default RoomsFilter;
