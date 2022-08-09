import React, {useMemo, useRef, useState} from 'react';

import {CustomToolBar} from "../Components/toolbarComponent/CustomToolBar";
import {CustomDrawer} from "../Components/drawerComponent/CustomeDrawer";
import {MapComponent} from "../Components/mapComponent/MapComponent";

import 'devextreme/dist/css/dx.light.css';
import styles from './App.module.css';

function App() {
    const drawerRef = useRef(null);
    const [isOpened, setState] = useState(false);
    console.log('isOpened', isOpened)
  return (
    <div className={styles.App}>
        <CustomToolBar toggleMenu={setState}/>
        <CustomDrawer drawerRef={drawerRef} isOpened={isOpened}>
            <MapComponent />
        </CustomDrawer>
    </div>
  );
}

export default App;
