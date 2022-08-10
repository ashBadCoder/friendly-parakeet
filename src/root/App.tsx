import React, {useCallback, useMemo, useRef, useState} from 'react';

import {CustomToolBar} from "../components/toolbarComponent/CustomToolBar";
import {CustomDrawer} from "../components/drawerComponent/CustomeDrawer";
import {MapComponent} from "../components/mapComponent/MapComponent";

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
    // const [isOpened, setState] = useState(false);
    const { isLarge } = useScreenSize();
    const [isOpened, setState] = useState(
        isLarge ? MenuStatus.Opened : MenuStatus.Closed
    );
    const toggleMenu = useCallback(({ event }: any) => {
        console.log('toggle')
        setState(
            prevMenuStatus => prevMenuStatus === MenuStatus.Closed
                ? MenuStatus.Opened
                : MenuStatus.Closed
        );
        // event.stopPropagation();
    }, []);

    const onOutsideClick = useCallback(() => {
        setState(
            prevMenuStatus => prevMenuStatus !== MenuStatus.Closed && !isLarge
                ? MenuStatus.Closed
                : prevMenuStatus
        );
        return true;
    }, [isLarge]);

  return (
    <div className={styles.App}>
        <CustomToolBar toggleMenu={toggleMenu}/>
        <CustomDrawer drawerRef={drawerRef} isOpened={isOpened} setState={onOutsideClick}>
            <MapComponent />
        </CustomDrawer>
    </div>
  );
}

export default App;
