import Drawer from 'devextreme-react/drawer';
import React from 'react';
import {NavigationList} from "./navigationsList/NavigationsList";
import {MapComponent} from "../mapComponent/MapComponent";





export function CustomDrawer({isOpened, children}: any) {
    console.log('CustomDrawer', isOpened)
    return (
        <>
            <Drawer
                minSize={37}
                height={'100%'}
                revealMode={'expand'}
                openedStateMode={'shrink'}
                component={NavigationList}
                opened={isOpened}
                >
                {children}
            </Drawer>
        </>
    );
}

