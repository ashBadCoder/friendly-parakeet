import Drawer from 'devextreme-react/drawer';
import React, {useCallback, useState} from 'react';
import {NavigationList} from "./navigationsList/NavigationsList";
import {MapComponent} from "../mapComponent/MapComponent";
import {useScreenSize} from "../../utils/media-query";
import {Template} from "devextreme-react";



const MenuStatus = {
    Closed: 1,
    Opened: 2,
    TemporaryOpened: 3
};


export function CustomDrawer({menuStatus, onOutsideClick, children, ...props}: {menuStatus: any, children: any,onOutsideClick: () => boolean}) {
    const { isXSmall, isLarge } = useScreenSize();

    return (
        <>
            <Drawer
                minSize={isXSmall ? 0 : 37}
                height={'100%'}
                openedStateMode={isLarge ? 'shrink' : 'overlap'}
                revealMode={isXSmall ? 'slide' : 'expand'}
                component={() => <div>component</div>}
                // opened={isOpened === MenuStatus.Closed ? false : true}
                shading={isXSmall ? true:false}
                closeOnOutsideClick={onOutsideClick}
                >
                {children}
            </Drawer>
        </>
    );
}

