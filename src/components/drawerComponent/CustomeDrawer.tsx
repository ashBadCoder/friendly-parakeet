import Drawer from 'devextreme-react/drawer';
import React, {useCallback, useState} from 'react';
import {NavigationList} from "./navigationsList/NavigationsList";
import {MapComponent} from "../mapComponent/MapComponent";
import {useScreenSize} from "../../utils/media-query";
import {Template} from "devextreme-react";
import {ItemClickEvent} from "devextreme/ui/list";


const MenuStatus = {
    Closed: 1,
    Opened: 2,
    TemporaryOpened: 3
};


export function CustomDrawer(
    {   menuStatus,
        onOutsideClick,
        children,
        onNavigationChanged,
        ...props } : {
        menuStatus: any;
        children: any;
        onOutsideClick: () => boolean;
        onNavigationChanged:({ event }: ItemClickEvent ) => void; }
    ) {
    const { isXSmall, isLarge } = useScreenSize();

    return (
        <>
            <Drawer
                position={'before'}
                closeOnOutsideClick={onOutsideClick}
                openedStateMode={isLarge ? 'shrink' : 'overlap'}
                revealMode={isXSmall ? 'slide' : 'expand'}
                minSize={isXSmall ? 0 : 37}
                maxSize={200}
                shading={isLarge ? false : true}
                opened={menuStatus === MenuStatus.Closed ? false : true}
                template={'menu'}
            >
                <Template name={'menu'}>
                    <NavigationList onNavigationChanged={onNavigationChanged}/>
                </Template>
                {children}
            </Drawer>
        </>
    );
}

