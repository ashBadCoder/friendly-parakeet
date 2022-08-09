import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import TreeView from 'devextreme-react/tree-view';

import { useScreenSize } from '../../utils/media-query';
// import './SideNavigationMenu.scss';


import * as events from 'devextreme/events';
//@ts-ignore
export  function SideNavigationMenu(props) {
    const {
        children,
        selectedItemChanged,
        openMenu,
        compactMode,
        onMenuReady
    } = props;

    const { isLarge } = useScreenSize();
    function normalizePath () {
        return [].map((item) => (
           'path'
        ))
    }

    const items = useMemo(
        normalizePath,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    // const { navigationData: { currentPath } } =

    const treeViewRef = useRef(null);
    const wrapperRef = useRef();
    const getWrapperRef = useCallback((element: Element | Element[] | undefined) => {
        const prevElement = wrapperRef.current;
        if (prevElement) {
            events.off(prevElement, 'dxclick');
        }
        //@ts-ignore
        wrapperRef.current = element;
        //@ts-ignore
        events.on(element, 'dxclick', (e) => {
            openMenu(e);
        });
    }, [openMenu]);

    useEffect(() => {
        //@ts-ignore
        const treeView = treeViewRef.current && treeViewRef.current.instance;
        if (!treeView) {
            return;
        }

        if (undefined) {
            //@ts-ignore
            treeView.selectItem(currentPath);
            //@ts-ignore
            treeView.expandItem(currentPath);
        }

        if (compactMode) {
            //@ts-ignore
            treeView.collapseAll();
        }
    }, ['currentPath', compactMode]);

    return (
        <div
            className={'dx-swatch-additional side-navigation-menu'}
            //@ts-ignore
            ref={getWrapperRef}
        >
            {children}
            <div className={'menu-container'}>
                <div style={{width: 150 + "px", backgroundColor: 'red' }}>Drawer content</div>
            </div>
        </div>
    );
}
