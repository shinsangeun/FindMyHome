/*global kakao*/
import React, { Component } from "react";
import styled from "styled-components";

class MapContent extends Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.async = true;
        script.src =
            "https://dapi.kakao.com/v2/maps/sdk.js?appkey=59ea7df9de6ace242c9fd3138e4d9ad8&autoload=false";
        document.head.appendChild(script);
    }

    render() {
        return <MapContents id="Mymap"/>;
    }
}

const MapContents = styled.div`
  width: 100%;
  height: 100%;
`;

export default MapContent;