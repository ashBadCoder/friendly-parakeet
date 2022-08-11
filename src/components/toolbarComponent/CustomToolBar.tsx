import React from 'react';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import {TextBox} from "devextreme-react";

type ToolbarProps = {
    toggleMenu: any
};


const searchButtonOptions = {
    icon: 'search',
    onClick() {
        console.log('click')
    }
}
const textBoxOptions = {
    placeholder: 'Search...',
    showClearButton: true
}


export const CustomToolBar = (props: ToolbarProps) => {
    const menuButton = {
        icon: 'contentlayout',
        onClick: props.toggleMenu
    };

    return <>
        <Toolbar>
            <Item
                widget="dxButton"
                options={menuButton}
                location={'before'}
            />
            <Item
                location={'after'}
                widget="dxTextBox"
                render={() => <TextBox {...textBoxOptions}></TextBox>}
            />
            <Item
                widget="dxButton"
                options={searchButtonOptions}
                location={'after'}
            />
            <Item
                widget="dxButton"
                options={{icon: 'share', onClick: () => console.log('share'), text: 'share'}}
                location={'after'}
                locateInMenu={'always'}
            />
        </Toolbar>
    </>
}