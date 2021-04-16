import React, { useState } from "react";
import { Input, Row } from "reactstrap";
import { connect } from "react-redux";
import { getArtists, setSearch } from "../redux/actions/index";

import { Colxx } from "../components/CustomCol";
import AlbumsList from "../components/AlbumsList";

function SearchPage(props) {
  const handleSearchField = (e) => {
    props.setSearch(e.target.value);
    if (e.target.value.length > 2) props.getArtists(e.target.value);
  };

  return (
    <>
      <Row className="container justify-content-center align-items-start w-100">
        <Colxx md="10" sm="9" xxs="7">
          <Input
            bsSize="lg"
            placeholder="Type to start"
            className="input-default"
            value={props.search}
            onChange={handleSearchField}
          />
          {props.artists && props.search.length > 2 && (
            <div className="autocomplete-content animate__animated animate__fadeInUp position-absolute">
              <p className="label-color pl-4 pt-4">Search results</p>
              {props.artists.map((item) => (
                <div key={item.id} className="clickable-item m-0">
                  <span className="label-color search-item">{item.name}</span>
                </div>
              ))}
            </div>
          )}
        </Colxx>
        <Colxx md="2" sm="3" xxs="5">
          <button className="btn-custom">SEARCH</button>
        </Colxx>
      </Row>

      <AlbumsList />
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getArtists: (data) => dispatch(getArtists(data)),
    setSearch: (data) => dispatch(setSearch(data)),
  };
};
const mapStateToProps = (state) => {
  return {
    artists: state.artists,
    search: state.search,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
