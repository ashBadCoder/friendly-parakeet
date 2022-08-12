import React, {useState} from 'react';

import { LoadPanel } from 'devextreme-react/load-panel';
import { Button } from 'devextreme-react/button';
import loader from '../../res/png/loader2.svg'
import {LoadIndicator} from "devextreme-react";
import {ButtonWithLoader} from "./buttonWithLoader/buttonWithLoader";

export const CustomLoadPanel = () => {
    const [isLoaderVisible, setIsLoaderVisible] = useState<boolean>(false);

    return <div className={'form'}>
        <ButtonWithLoader/>
        <LoadPanel
            indicatorSrc={loader}
            message={'Загрузка'}
            showPane={false}
            shadingColor="rgba(0, 0, 22, 0.2)"
            visible={isLoaderVisible}
            hideOnOutsideClick={true}
            onHidden={() => {
                console.log('hiding');
                setIsLoaderVisible(false)
            }}/>
    </div>
}