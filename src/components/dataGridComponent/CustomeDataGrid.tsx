import React, {useEffect} from 'react';

import List from 'devextreme-react/list';
import CustomStore from "devextreme/data/custom_store";
import {DataGrid} from "devextreme-react";
import {RemoteOperations} from "devextreme-react/data-grid";
import {log} from "util";
import {PagerPageSize} from "devextreme/ui/data_grid";



function handleErrors(response: any) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

const customDataSource = new CustomStore({
    key: 'id',
    load: (loadOptions)  => {
        let params = '?';
        console.log(loadOptions)
        return fetch('https://jsonplaceholder.typicode.com/todos')
            .then(handleErrors)
            .then(response =>response.json())
            .then(json => {
                console.log(loadOptions)
                return {data: json, totalCount: json.length}
            })
            .catch((json) => {
                return json;
            });
    }
});

export const CustomDataGrid = () => {

    return (
        <DataGrid
            dataSource={customDataSource}
            paging={{pageSize: 10}}
        >
            <RemoteOperations paging={true}/>

        </DataGrid>
);
}
