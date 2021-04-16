import React from "react";
import { connect } from "react-redux";
import { getArtists } from "../redux/actions/index";
// import { Container } from './styles';

function AlbumsList(props) {
  return (
    <>
      <span>Search results for {props.search}</span>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getArtists: (data) => dispatch(getArtists(data)),
  };
};
const mapStateToProps = (state) => {
  return {
    artists: state.artists,
    search: state.search,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsList);
