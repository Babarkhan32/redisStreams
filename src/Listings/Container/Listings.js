/* eslint linebreak-style: ["error", "windows"] */

import React, { useState, useEffect } from 'react';

// eslint-disable-next-line import/no-unresolved
import socketIOClient from "socket.io-client";
import ListingsUi from '../Ui/ListingsUi';
import { ContextOne } from '../../contexts/eventContext';
import 'antd/dist/antd.css';
import { SOCKETENDPOINT } from '../../constants/app_Constants';

const Listings = () => {
  const { state, dispatch } = React.useContext(ContextOne);
  const [eventData, setEventData] = useState([]);
  const socket = socketIOClient(SOCKETENDPOINT);

  useEffect(() => {
    socket.on("message", (data) => {
      const obj = JSON.parse(data.message);
      eventData.push(obj.type);
      setEventData(eventData);
      dispatch({ type: "event" });
    });
  }, [state.status]);

  const search = (value) => {
    const index = eventData.indexOf(value);
    if (index > -1) {
      setEventData([eventData[index]]);
    } else {
      // eslint-disable-next-line no-alert
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
