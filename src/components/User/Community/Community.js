import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

export default function Community() {
  const WrappedMap = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 21.6671046, lng: 87.7131787 }}
      ></GoogleMap>
    ))
  );

  return (
    <div className="bg-white p-4 flex flex-col">
      <div className="flex gap-4 p-4">
        <div>
          <h1 className="text-6xl">Beach Protector</h1>
          <p className="w-1/2 py-6 px-4 text-xl">
            Hello, We are Beach Protectors! based in Mandarmani we host cleanups
            upto 6 times a month, our goal is to make the beach a safer place
            and preserve aquatic life with the nature around it. Feel free to
            join us and ask us questions
          </p>
        </div>
        <div>
          <div>
            <WrappedMap
              isMarkerShown={true}
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDMNy3MiJct_jGbjT1svGZGy7rN8wcSC8A"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `20vh` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </div>
      </div>
      <div>by</div>
    </div>
  );
}
