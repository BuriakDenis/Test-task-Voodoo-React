import React, { useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
import "./MapLocation.css";
import AdressInfo from "./AdressInfo/AdressInfo";

const center = {
  lat: 43.445276,
  lng: -80.515460,
};


const defaultOptions = {
  panControl: false,
  zoomControl: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrollwheel: false,
  disableDoubleClickZoom: false,
  fullscreenControl: false,
};
const exampleMapStyles = [
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#e9e9e9",
      },
      {
        lightness: 17,
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f5f5",
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#ffffff",
      },
      {
        lightness: 17,
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#ffffff",
      },
      {
        lightness: 29,
      },
      {
        weight: 0.2,
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff",
      },
      {
        lightness: 18,
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff",
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f5f5",
      },
      {
        lightness: 21,
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#dedede",
      },
      {
        lightness: 21,
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "on",
      },
      {
        color: "#ffffff",
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        saturation: 36,
      },
      {
        color: "#333333",
      },
      {
        lightness: 40,
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        color: "#f2f2f2",
      },
      {
        lightness: 19,
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#fefefe",
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#fefefe",
      },
      {
        lightness: 17,
      },
      {
        weight: 1.2,
      },
    ],
  },
];

export default function MapLocation() {
  const [open, setOpen] = useState(false);
  const onMarkerClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const onMapClick = () => {
    setOpen(false);
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyDp4mypNUkiisiumY6NRcEiE0nOY9EuOO0">
      <GoogleMap
        onClick={() => {
          onMapClick();
        }}
        mapContainerClassName={"location"}
        center={center}
        zoom={15.8}
        options={{
          styles: exampleMapStyles,
          options: defaultOptions,
        }}
      >
        <>
          <AdressInfo
            markerClick={open}
            title={"Voodoo"}
            adress={"137 Glasgow St., Unit 115 Kitchener, ON N2G 4X8 Ukraine"}
            phone={"1-800-480-9597"}
            mail={"info@voodoo.com"}
          />
          <Marker
            onClick={() => {
              onMarkerClick();
            }}
            icon={{
              path: "M16 0.875C11.8078 0.879946 7.78867 2.54749 4.82432 5.51184C1.85997 8.47618 0.192432 12.4953 0.187486 16.6875C0.182465 20.1134 1.30152 23.4463 3.37299 26.175C3.37299 26.175 3.80424 26.7428 3.87467 26.8248L16 41.125L28.131 26.8176C28.1943 26.7414 28.627 26.175 28.627 26.175L28.6284 26.1707C30.6989 23.4432 31.8174 20.1118 31.8125 16.6875C31.8075 12.4953 30.14 8.47618 27.1756 5.51184C24.2113 2.54749 20.1922 0.879946 16 0.875ZM16 22.4375C14.8627 22.4375 13.751 22.1003 12.8055 21.4685C11.8599 20.8366 11.1229 19.9386 10.6877 18.8879C10.2525 17.8373 10.1386 16.6811 10.3605 15.5657C10.5823 14.4503 11.13 13.4258 11.9341 12.6216C12.7383 11.8175 13.7628 11.2698 14.8782 11.048C15.9936 10.8261 17.1497 10.94 18.2004 11.3752C19.2511 11.8104 20.1491 12.5474 20.7809 13.493C21.4128 14.4386 21.75 15.5503 21.75 16.6875C21.7481 18.2119 21.1417 19.6733 20.0637 20.7513C18.9858 21.8292 17.5244 22.4356 16 22.4375Z",
              fillColor: "#1A1A1A",
              fillOpacity: 1,
              scale: 1,
              strokeWeight: 2,
            }}
            position={center}
          />
        </>
      </GoogleMap>
    </LoadScript>
  );
}
