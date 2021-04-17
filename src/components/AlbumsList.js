import React from "react";
import { connect } from "react-redux";
import { Row } from "reactstrap";
import moment from "moment";
import { Colxx } from "../components/CustomCol";

import { setCurrentAlbum, getAlbumSongs } from "../redux/actions/index";
import events from "../utils/events";

function AlbumsList(props) {
  const handleAlbums = (item) => {
    props.setCurrentAlbum(item);
    props.getAlbumSongs(item.id);
    events.publish("ScrollTo");
  };
  if (props.albums && props.albums.length > 0) {
    return (
      <Row className="container justify-content-center align-items-start w-100">
        <Colxx>
          <p className="label-color mv-4">
            Search results for {props.artist.name}
          </p>
          <Row>
            {props.albums.map((item) => (
              <Colxx
                onClick={() => handleAlbums(item)}
                md="3"
                sm="12"
                key={item.id}
                className="justify-content-center align-items-center d-flex flex-column animate__animated animate__fadeInUp"
              >
                <img src={item.cover_medium} alt="" className="album-image" />

                <p className="album-label mb-0 mt-3 text-center">
                  {item.title}
                </p>
                <p className="date-label">
                  {moment(item.release_date).format("L")}
                </p>
              </Colxx>
            ))}
          </Row>
        </Colxx>
      </Row>
    );
  } else if (props.albums && props.albums.length === 0)
    return (
      <>
        <span>No result for {props.search}</span>
      </>
    );
  else return <></>;
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentAlbum: (data) => dispatch(setCurrentAlbum(data)),
    getAlbumSongs: (data) => dispatch(getAlbumSongs(data)),
  };
};
const mapStateToProps = (state) => {
  return {
    artist: state.artist,
    albums: state.albums,
    album: state.album,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsList);
// "Unknown path components : /artist/7185752/104392892/tracks"
