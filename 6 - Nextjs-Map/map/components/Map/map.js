import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import style from "../../styles/Home.module.css";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  Polyline,
  CircleMarker,
} from "react-leaflet";

export default function Map() {
  const position = [40.6906732,30.221825];
  const polyline = [
    [40.6906732,30.221825],
    [40.6927732,30.223920],
    [40.6948732,30.225050],
   
  ];
  const purpleOption = { color: "purple" };
  const redOption = { color: "red" };
  return (
    <MapContainer
      className={style.map}
      center={position}
      zoom={14}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          skytrain. <br /> waterFront.
        </Popup>
      </Marker>

      <CircleMarker
        center={[40.6948732,30.225050]}
        pathOptions={redOption}
        radius={20}
      >
        <Popup>you reached your destination!</Popup>
      </CircleMarker>
      <Polyline pathOptions={purpleOption} positions={polyline} />
    </MapContainer>
  );
}

//  // import { MapContainer } from "react-leaflet/MapContainer";
//  // import { TileLayer } from "react-leaflet/TileLayer";
//  // import { useMap } from "react-leaflet/hooks";
//  // import "leaflet/dist/leaflet.css"
//  // import "leaflet-defaulticon-compatibility"
//  // import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
//  import style from "../../styles/Home.module.css";
//  import {
//    MapContainer,
//    TileLayer,
//    useMap,
//    Marker,
//    Popup,
//    Polyline,
//    CircleMarker,
//  } from "react-leaflet";
//  export default function Map() {
//    const position = [49.28594, -123.11129];
//    const polyline = [
//      [49.28594, -123.11129],
//      [49.2825, -123.11865],
//      [49.2745, -123.12189],
//    ];
//    const purpleOption = { color: "purple" };
//    const redOption = { color: "red" };
//    return (
//      <div>
//        <MapContainer
//          className={style.map}
//          center={position}
//          zoom={14}
//          scrollWheelZoom={true}
//        >
//          <TileLayer
//            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//          />
//          <Marker position={position}>
//            <Popup>
//              skytrain. <br /> waterFront.
//            </Popup>
//          </Marker>
//          <CircleMarker
//            center={[49.2745, -123.12189]}
//            pathOptions={redOption}
//            radius={20}
//          >
//            <Popup>you reached your destination!</Popup>
//          </CircleMarker>
//          <Polyline pathOptions={purpleOption} positions={polyline} />
//        </MapContainer>
//      </div>
//    );
//  }
