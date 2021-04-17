import React, { useState } from "react";
import { Input, Row } from "reactstrap";
import { connect } from "react-redux";
import {
  getArtists,
  setSearch,
  getAlbums,
  setCurrentArtist,
  setSongs,
} from "../redux/actions/index";

import { Colxx } from "../components/CustomCol";

const SearchComponent = (props) => {
  const [placeholder, setPlaceholder] = useState(
    "Search for an artist to start"
  );
  const handleSearchField = (e) => {
    props.setSearch(e.target.value);
    props.getArtists(e.target.value);
    props.setSongs(null);
  };

  const handleClick = (item) => {
    setPlaceholder(item.name);
    props.setSearch("");
    props.setCurrentArtist(item);
    props.getAlbums(item.id);
  };

  return (
    <Row className="container justify-content-center align-items-start w-100 mt-5 mb-5 ">
      <Colxx md="10" sm="9" xxs="12">
        <Input
          bsSize="lg"
          placeholder={placeholder}
          className="input-default"
          value={props.search}
          onChange={handleSearchField}
        />
        {props.artists && props.search.length > 0 && (
          <div className="autocomplete-content animate__animated animate__fadeInUp position-absolute ">
            <p className="label-color pl-4 pt-4">Search results</p>
            {props.artists.map((item) => (
              <div
                key={item.id}
                className="clickable-item m-0"
                onClick={() => handleClick(item)}
              >
                <span className="label-color search-item">{item.name}</span>
              </div>
            ))}
          </div>
        )}
      </Colxx>
      <Colxx md="2" sm="3" xxs="12">
        <button className="btn-custom">SEARCH</button>
      </Colxx>
    </Row>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getArtists: (data) => dispatch(getArtists(data)),
    setSearch: (data) => dispatch(setSearch(data)),
    getAlbums: (data) => dispatch(getAlbums(data)),
    setSongs: (data) => dispatch(setSongs(data)),
    setCurrentArtist: (data) => dispatch(setCurrentArtist(data)),
  };
};
const mapStateToProps = (state) => {
  return {
    artists: state.artists,
    search: state.search,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
