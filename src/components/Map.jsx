import { useMemo } from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'

export default function Map() {
    const { isLoaded } = useLoadScript({
        googleMapsApi: "foo"
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Googe />;
}

function Googe() {
    return <GoogleMap zoom={10} center={{lat:44, lng: -80}} mapContainerclassName='width: 100% height: 100vh'></GoogleMap>;
}

