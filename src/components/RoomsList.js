import React from "react";
import Room from "./Room";
const RoomsList = ({ rooms, roomType }) => {
  console.log(roomType);
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }
  return (
    
    <section className="roomslist">
      <div className="row">
      <div className="page-tab">Products</div>
      </div>
      <div className="roomslist-center">
        {rooms.map(item => {
          if(item.type === roomType)
          return <Room key={item.id} room={item} />;
          if(roomType === "all"){
            return <Room key={item.id} room={item} />;
          }
          
        })}
      </div>
    </section>
  );
};

export default RoomsList;
