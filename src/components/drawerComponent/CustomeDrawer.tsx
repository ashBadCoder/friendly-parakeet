import Drawer from 'devextreme-react/drawer';
import React, {useCallback, useState} from 'react';
import {NavigationList} from "./navigationsList/NavigationsList";
import {MapComponent} from "../mapComponent/MapComponent";
import {useScreenSize} from "../../utils/media-query";



const MenuStatus = {
    Closed: 1,
    Opened: 2,
    TemporaryOpened: 3
};


export function CustomDrawer({isOpened, children, setState}: any) {
    const { isXSmall, isLarge } = useScreenSize();

    const onOutsideClick = useCallback(() => {
        setState((prev: boolean) => !prev)
        return true;
    }, []);

    return (
        <>
            <Drawer
                minSize={isXSmall ? 0 : 37}
                height={'100%'}
                openedStateMode={isLarge ? 'shrink' : 'overlap'}
                revealMode={isXSmall ? 'slide' : 'expand'}
                component={() => <NavigationList/>}
                opened={isOpened === MenuStatus.Closed ? false : true}
                shading={isXSmall ? true:false}
                closeOnOutsideClick={onOutsideClick}
                >
                {children}
            </Drawer>
        </>
    );
}

