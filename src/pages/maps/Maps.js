/*global kakao*/
import React, {Component} from "react";
import styled from "styled-components";
import $ from "jquery";

class Maps extends Component{
    componentDidMount() {
        const script = document.createElement("script");
        script.async = true;
        script.src =
            "https://dapi.kakao.com/v2/maps/sdk.js?appkey=59ea7df9de6ace242c9fd3138e4d9ad8&autoload=false"
        document.head.appendChild(script);

        console.log("script:", script);

        script.onload = () => {
            kakao.maps.load(() => {
                let container = document.getElementById("kakaoMap");
                let options = {
                    center: new kakao.maps.LatLng(37.6779627, 127.0517842),
                    level: 12
                }

                const map = new window.kakao.maps.Map(container, options);

              /*  let clusterer = new kakao.maps.MarkerClusterer({
                    map: map,
                    averageCenter: true,
                    minLevel: 10
                });*/

                /*$.get("https://apis.map.kakao.com/download/web/data/chicken.json", function (data) {
                    let markers = $(data.positions).map(function (i, position) {
                        return new kakao.maps.Marker({
                            position: new kakao.maps.LatLng(position.lat, position.lng)
                        });
                    });
                    clusterer.addMarkers(markers);
                })*/
            })
        }
    }

    render() {
        return (
            <MapsContents id="kakaoMap"/>
        );
    }
}

const MapsContents = styled.div`
  width: 100%;
  height: 100%;
`;

export default Maps;