import {
  APIProvider,
  AdvancedMarker,
  InfoWindow,
  Map,
  Pin,
} from "@vis.gl/react-google-maps";
import { useState } from "react";

export function GoogleMap() {
  const [open, setOpen] = useState(false);
  const position = { lat: -22.390304565429688, lng: -42.9517936706543 };

  return (
    <APIProvider apiKey={import.meta.env.VITE_API}>
      <div style={{ color: "#000" }} className="map">
        <Map
          defaultZoom={17}
          defaultCenter={position}
          mapId={import.meta.env.VITE_MAP_ID}
        >
          <AdvancedMarker onClick={() => setOpen(true)} position={position}>
            <Pin
              borderColor={"#c51b1b"}
              background={"#ff3131"}
              glyphColor={"#c51b1b"}
            />
          </AdvancedMarker>

          {open && (
            <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
              Estou na Terê-Fri Car!
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}
