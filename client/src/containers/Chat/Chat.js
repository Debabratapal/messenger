import React, { lazy, useEffect, useState } from "react";
import io from "socket.io-client";
import queryString from "query-string";
import { BrowserRouter, Route } from "react-router-dom";

const UserListComponent = lazy(() => import("./components/UserList"));
const ENDPOINT = "localhost:5000";

const Chat = (props) => {
  const [name, setName] = useState("");

  useEffect(() => {
    const { name } = queryString.parse(props.location.search);
    let socket = io(ENDPOINT);
    setName(name);
    socket.emit("join", { name });

    return () => {
      socket.off();
    };
  }, [ENDPOINT, props.location.search]);

  return (
    <BrowserRouter>
      <Route path="/" component={UserListComponent} />
    </BrowserRouter>
  );
};

export default Chat;
