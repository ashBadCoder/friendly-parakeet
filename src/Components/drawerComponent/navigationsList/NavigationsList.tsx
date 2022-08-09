import {useHistory} from "react-router";
import {Button, List} from "devextreme-react";
import React from "react";
import './navigationList.css';

export const authRoutes = [
    {id: '1', caption: 'третий', icon: 'home'},
    {id: '2', caption: 'второй', icon: 'favorites'},
    {id: '3', caption: 'первый', icon: 'find',}
]
export const NavigationList = () => {
    const loadView = (e: any) => {
        if (!e.addedItems.length || e.addedItems[0].path === '/reference/:id') return;
        // history.push(e.addedItems[0].path);
    }
    const history = useHistory();
    const resultedItems = authRoutes.map((items, i) => {
        return {...items, id: i, text: items.caption}
    })

    return (
        <div className={'sideBar-links-container'}>
            <List
                className={'sideBar-links-mainLinks'}
                items={resultedItems}
                width={200}
                selectionMode="single"
                onSelectionChanged={loadView}/>
            <Button
                className={'sideBar-links-footer'}
                stylingMode={'outlined'}
                icon={'preferences'}
                width={200}
            />
        </div>
    );
}