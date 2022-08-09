import React, {useCallback, useMemo, useRef, useState} from 'react';

import {CustomToolBar} from "../Components/toolbarComponent/CustomToolBar";
import {CustomDrawer} from "../Components/drawerComponent/CustomeDrawer";
import {MapComponent} from "../Components/mapComponent/MapComponent";

import 'devextreme/dist/css/dx.light.css';
import styles from './App.module.css';
import {useScreenSize} from "../utils/media-query";

const MenuStatus = {
    Closed: 1,
    Opened: 2,
    TemporaryOpened: 3
};

function App() {

    const drawerRef = useRef(null);
    const [isOpened, setState] = useState(false);


  return (
    <div className={styles.App}>
        <CustomToolBar toggleMenu={ setState}/>
        <CustomDrawer drawerRef={drawerRef} isOpened={isOpened} setState={setState}>
            <MapComponent />
        </CustomDrawer>
    </div>
  );
}

export default App;
