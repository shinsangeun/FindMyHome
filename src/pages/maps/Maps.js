import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from "react-google-maps";

// styles
import useStyles from "./styles";
import {Grid} from "@material-ui/core";

const BasicMap = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{
        lat: parseFloat(37.6779627),
        lng: parseFloat(127.0517842),
      }}
    >
      <Marker position={{ lat: 37.6779627, lng: 127.0517842 }} />
    </GoogleMap>
  )),
);

export default function Maps() {
  var classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <BasicMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg"
        loadingElement={<div style={{ height: "inherit", width: "inherit" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}
