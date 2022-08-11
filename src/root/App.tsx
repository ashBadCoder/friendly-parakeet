import React, {useCallback, useMemo, useRef, useState} from 'react';

import {CustomToolBar} from "../components/toolbarComponent/CustomToolBar";
import {CustomDrawer} from "../components/drawerComponent/CustomeDrawer";
import {MapComponent} from "../components/mapComponent/MapComponent";

import 'devextreme/dist/css/dx.light.css';
import styles from './App.module.css';
import {useScreenSize} from "../utils/media-query";
import Drawer from "devextreme-react/drawer";
import {NavigationList} from "../components/drawerComponent/navigationsList/NavigationsList";
import {Template} from "devextreme-react";
import {ItemClickEvent} from "devextreme/ui/list";

const MenuStatus = {
    Closed: 1,
    Opened: 2,
    TemporaryOpened: 3
};

function App() {

    const drawerRef = useRef(null);
    const { isLarge, isXSmall } = useScreenSize();
    const [menuStatus, setMenuStatus] = useState(
        isLarge ? MenuStatus.Opened : MenuStatus.Closed
    );

    const toggleMenu = useCallback(({ event }: any) => {
        setMenuStatus(
            prevMenuStatus => prevMenuStatus === MenuStatus.Closed
                ? MenuStatus.Opened
                : MenuStatus.Closed
        );
        event.stopPropagation();
    }, []);
    const onOutsideClick = useCallback(() => {
        setMenuStatus(
            prevMenuStatus => {
                return  prevMenuStatus !== MenuStatus.Closed && !isLarge
                    ? MenuStatus.Closed
                    : prevMenuStatus
            }
        );
        return true;
    }, [isLarge]);
    const onNavigationChanged = useCallback(({event}: ItemClickEvent) => {
        if (menuStatus === MenuStatus.Closed) {
            event &&  event.stopPropagation();
            return;
        }
        if (!isLarge) {
            setMenuStatus(MenuStatus.Closed);
            event &&  event.stopPropagation();
        }
    }, [menuStatus]);

  return (
    <div className={styles.App}>
        <CustomToolBar toggleMenu={toggleMenu}/>
        <CustomDrawer menuStatus={menuStatus} onOutsideClick={onOutsideClick} onNavigationChanged={onNavigationChanged}>
            <MapComponent/>
        </CustomDrawer>
    </div>
  );
}

export default App;
