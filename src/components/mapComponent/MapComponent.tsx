import React, {useState} from 'react';

import Map from 'devextreme-react/map';
import SelectBox from 'devextreme-react/select-box';

import './mapContent.css';
export const mapTypes: any = [{
    key: 'roadmap',
    name: 'Road Map',
}, {
    key: 'satellite',
    name: 'Satellite (Photographic) Map',
}, {
    key: 'hybrid',
    name: 'Hybrid Map',
}];

export const MapComponent  =  () => {
    const [mapTypeValue, setMapTypeValue] = useState(mapTypes[0].key);

   const onMapTypeChanged = (e: any) => {
       setMapTypeValue(e.value)
    }
    const keys = {google: "YOUR_GOOGLE_MAPS_API_KEY"}

        return (
            <div className={'contentContainer'}>
                <div className="option">
                    <SelectBox
                        value={mapTypeValue}
                        onValueChanged={onMapTypeChanged}
                        dataSource={mapTypes}
                        displayExpr="name"
                        valueExpr="key"
                    />
                </div>
                <Map
                    defaultCenter="Brooklyn Bridge,New York,NY"
                    defaultZoom={14}
                    apiKey={keys}
                    height={'100%'}
                    width="100%"
                    provider="bing"
                    type={mapTypeValue}>
                </Map>

            </div>
        );

}

