import React, {useState, useEffect} from "react";
import fire from "../../../config/Fire";
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";


const Beaches = () => {
    const [coords, setCoords] = useState({
        lat: "",
        long: "",
        error: false
    });
    const [selectedCommunity, setSelectedCommunity] = useState(null);
    const [selectedBeach, setSelectedBeach] = useState(null);
    const [loading, setLoading] = useState(true);
    const [communities, setCommunities] = useState([]);
    const [beaches, setBeaches] = useState([]);

    const {lat, long} = coords;

    useEffect(() => {
        getLocation();
        getBeaches();
        getCommunities();
        setLoading(false);
    }, [])

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
          } else {
            setCoords(
                {
                    ...coords,
                    lat: "",
                    long: "",
                    error: true
                }
            )
          }
    }

    const getBeaches = async () => {
        const beaches = await fire.firestore().collection("beaches").doc("beaches").get();
        const beachdocs = beaches.data();
        setBeaches(beachdocs?.beaches);
    }

    const getCommunities = async () => {
        const communities = await fire.firestore().collection("beaches").doc("communities").get();
        const comdocs = communities.data();
        setCommunities(comdocs?.communities);
    }

    function showPosition(pos){
        setCoords({
            ...coords,
            lat: pos.coords.latitude,
            long: pos.coords.longitude
        })
    }

    console.log(beaches);
    console.log(communities);
    const WrappedMap = withScriptjs(withGoogleMap((props) =>
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: lat, lng: long }}
        >
             
          {beaches &&
              beaches.map((beach, key) => (
                  <Marker key={key} position={{lat: beach.lat, lng: beach.long}} onClick={() => setSelectedBeach(beach)} 
                    icon={{
                        url: "https://i.pinimg.com/736x/e3/bd/55/e3bd555aadc01b3828ac4d8f7a3d1885.jpg",
                        scaledSize: new window.google.maps.Size(50, 50)
                    }} 
                  />
              ))
          }
          {communities &&
              communities.map((community, key) => (
                  <Marker key={key} position={{lat: community.lat, lng: community.long}} onClick={() => setSelectedCommunity(community)} 
                    icon={{
                        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1VfpUMXGPvrEfGM4xFvmekLLurbQBG_yvlA&usqp=CAU",
                        scaledSize: new window.google.maps.Size(50, 50)
                    }} 
                  />
              ))
          } 
          {
              selectedBeach && 
              (<InfoWindow position={{lat: selectedBeach.lat, lng: selectedBeach.long}} onCloseClick={() => setSelectedBeach(null)}>
                  <div className="container rounded bg-white shadow max-w-sm mx-auto m-4 max-h-sm overflow-auto">
                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-amber-600 bg-amber-200 uppercase last:mr-0 mr-1 mb-3">
                        Beach
                    </span>
                    <img src={selectedBeach.image} className="mb-3" style={{width: "100%", height: "100%"}} alt="..." />
                    <p className="uppercase font-bold mb-3">{selectedBeach.name}</p>
                    <p className="text-gray-600 mb-3">{selectedBeach.address}</p>
                    <p className="font-bold mb-3">Pollution Level : {selectedBeach.pollution}</p>
                    <p className="font-bold mb-3">Average Visitors/day : {selectedBeach.visitors}</p>
                  </div>
              </InfoWindow>)
          } 
          {
              selectedCommunity &&
              (<InfoWindow position={{lat: selectedCommunity.lat, lng: selectedCommunity.long}} onCloseClick={() => setSelectedCommunity(null)}>
                  <div className="container rounded bg-white shadow max-w-sm mx-auto m-4 max-h-sm overflow-auto">
                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-black-600 bg-blue-200 uppercase last:mr-0 mr-1 mb-3">
                        Community
                    </span>
                    <img src={selectedCommunity.image} className="mb-3" style={{width: "100%", height: "100%"}} alt="..." />
                    <p className="uppercase font-bold mb-3">{selectedCommunity.name}</p>
                    <p className="text-gray-600 mb-3">{selectedCommunity.address}</p>
                    <p className="font-bold mb-3">Beach Covering : {selectedCommunity.beach}</p>
                    <p className="font-bold mb-3">Leader Name : {selectedCommunity.leader}</p>
                    <p className="font-bold mb-3">Events Organised : {selectedCommunity.events}</p>
                    <p className="font-bold mb-3">Number of Members : {selectedCommunity.members}</p>
                  </div>
              </InfoWindow>)
          }
        </GoogleMap>
    ))
    if(loading)
    {
        return(
            <div></div>
        )
    }
    else{
        return (
            <div>
                
                <WrappedMap 
                    isMarkerShown={true}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDMNy3MiJct_jGbjT1svGZGy7rN8wcSC8A"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100vh` }} />}
                    mapElement={<div style={{ height: `100%` }} />} 
                />
            </div>
        )
    }
    
}

export default Beaches;