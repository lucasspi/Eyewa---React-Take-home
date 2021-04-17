import React from "react";
import { connect } from "react-redux";
import { Row } from "reactstrap";
import { Colxx } from "../components/CustomCol";

function SongsList(props) {
  const durationConfig = (tx) => {
    if (tx.length === 2) return `00:${tx[0]}${tx[1]}`;
    else if (tx.length === 3) return `0${tx[0]}:${tx[1]}${tx[2]}`;
    else if (tx.length === 4) return `${tx[0]}${tx[1]}:${tx[2]}${tx[3]}`;
  };
  if (props.songs && props.songs.length > 0)
    return (
      <Row className="container justify-content-start align-items-start w-100 mt-5 mb-5 animate__animated animate__fadeInDown">
        <Colxx md="3">
          <img alt="song-image" src={props.album.cover_medium} />
        </Colxx>
        <Colxx md="9">
          <p className="album-track-label">{props.album.title}</p>
          <Row className="justify-content-between d-flex align-items-center">
            <Colxx md="2">
              <p className="track-label font-weight-bold">#</p>
            </Colxx>
            <Colxx md="5">
              <p className="track-label text-left font-weight-bold">Title</p>
            </Colxx>
            <Colxx md="3">
              <p className="track-label text-left font-weight-bold">Artist</p>
            </Colxx>
            <Colxx md="2">
              <p className="track-label text-left font-weight-bold">Time</p>
            </Colxx>
          </Row>
          {props.songs.map((item, index) => (
            <Row
              key={index}
              className="justify-content-between d-flex align-items-center track-bg"
            >
              <Colxx md="2" className="">
                <p className="track-label m-0">{index + 1}</p>
              </Colxx>
              <Colxx md="5">
                <p className="track-label text-left m-0">{item.title}</p>
              </Colxx>
              <Colxx md="3">
                <p className="track-label text-left  m-0">{item.artist.name}</p>
              </Colxx>
              <Colxx md="2">
                <p className="track-label text-left m-0">
                  {durationConfig(`${item.duration}`)}
                </p>
              </Colxx>
            </Row>
          ))}
        </Colxx>
      </Row>
    );
  else if (props.songs && props.songs.length === 0)
    return (
      <>
        <span>No result for {props.album.title}</span>
      </>
    );
  else return <></>;
}

const mapDispatchToProps = (dispatch) => {
  return {};
};
const mapStateToProps = (state) => {
  return {
    album: state.album,
    songs: state.songs,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongsList);
