import React, { Fragment, useEffect, useRef } from "react";

import AlbumsList from "../components/AlbumsList";
import SearchComponent from "../components/SearchComponent";
import SongsList from "../components/SongsList";
import events from "../utils/events";

function SearchPage() {
  const myRef = useRef(null);
  const executeScroll = () =>
    setTimeout(() => {
      myRef.current.scrollIntoView();
    }, 750);

  useEffect(() => {
    events.subscribe("ScrollTo", executeScroll);
  }, []);
  return (
    <Fragment>
      <SearchComponent />
      <AlbumsList />
      <div ref={myRef} />
      <SongsList />
    </Fragment>
  );
}

export default SearchPage;
