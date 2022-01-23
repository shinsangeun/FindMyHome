/* global kakao */
import React, {useEffect} from "react";
// @ts-ignore
import styled from "styled-components";

const MapContents = styled.div`
  width: 100%;height: 100%;padding: 20px;
`;

declare global{
    interface Window{
        kakao: any;
    }
}

const MapContainer = () => {
    useEffect(() => {
        const { kakao } = window;
        let container = document.getElementById("map");

        let options = {
            center: new window.kakao.maps.LatLng(35.85133, 127.734086),
            level: 13,
        };

        let map = new window.kakao.maps.Map(container, options);
        console.log("loading kakaomap");
    }, []);

    return (
        <MapContents className={"MapContents"}>
            <div style={{width: '80%', height: '500px'}} className={"MapContents"} id="map"/>
        </MapContents>
    );
};

export default MapContainer;
