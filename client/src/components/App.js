import React from "react";
import { Route } from "react-router-dom";
import StreamCreate from "./steams/StreamCreate";
import StreamDelete from "./steams/StreamDelete";
import StreamEdit from "./steams/StreamEdit";
import StreamShow from "./steams/StreamShow";
import StreamList from "./steams/StreamList";
import Header from "./Header";

export default function App() {
  return (
    <div className="ui container">
      <Header />
      <Route path="/" exact component={StreamList} />
      <Route path="/streams/new" component={StreamCreate} />
      <Route path="/streams/edit" component={StreamEdit} />
      <Route path="/streams/delete" component={StreamDelete} />
      <Route path="/streams/show" component={StreamShow} />
    </div>
  );
}
