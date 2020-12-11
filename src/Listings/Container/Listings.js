import React, { useState, useEffect } from "react";
import ListingsUi from "../Ui/ListingsUi";
import socketIOClient from "socket.io-client";
import { ContextOne } from "../../contexts/eventContext";
import "antd/dist/antd.css";
import { SOCKETENDPOINT } from "../../constants/app_Constants";

const Listings = () => {
  let { state, dispatch } = React.useContext(ContextOne);
  const [eventData, setEventData] = useState([]);
  const socket = socketIOClient(SOCKETENDPOINT);

  useEffect(() => {
    socket.on("message", (data) => {
      let obj = JSON.parse(data.message);
      eventData.push(obj.type);
      setEventData(eventData);
      dispatch({ type: "event" });
    });
  }, [state.status]);

  const search = (value) => {
    let index = eventData.indexOf(value);
    if (index > -1) {
      setEventData([eventData[index]]);
    } else {
      alert("Not found");
    }
  };

  const onStartData = () => {
    socket.emit("startData");
  };

  const onStopData = () => {
    socket.emit("stopData");
  };
  return (
    <ListingsUi
      onStartData={onStartData}
      onStopData={onStopData}
      eventsData={eventData}
      search={search}
    />
  );
};
export default Listings;
