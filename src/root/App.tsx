import React, {useCallback, useRef, useState} from 'react';
import {CustomToolBar} from "../components/toolbarComponent/CustomToolBar";
import {useScreenSize} from "../utils/media-query";
import {ItemClickEvent} from "devextreme/ui/list";
import {SlowedComponent} from "../components/slowedComponent/SlowedComponent";

import styles from './App.module.css';
import {CustomDrawer} from "../components/drawerComponent/CustomeDrawer";
import {CustomLoadPanel} from "../components/loadPanelComponent/CustomLoadPanel";
import {MapComponent} from "../components/mapComponent/MapComponent";

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
            {/*<MapComponent/>*/}
            <CustomLoadPanel/>
            {/*<SlowedComponent/>*/} {/* todo почему внутри drawer  не работает*/}
        </CustomDrawer>
    </div>
  );
}

export default App;
