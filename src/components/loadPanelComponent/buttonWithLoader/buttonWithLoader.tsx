import React, {RefObject, useRef, useState} from "react";

import { Button } from "devextreme-react/button";
import { LoadIndicator } from "devextreme-react/load-indicator";

import './buttonWithLoader.css'

export const ButtonWithLoader  = () => {
    const [isLoaderVisible, setIsLoaderVisible] = useState(false);
    const buttonRef = useRef<Button>(null);
    return (
        <div>
            <Button
                ref={buttonRef}
                id="button"
                width={180}
                height={40}
                onClick={(e) => {
                    console.log("log e", e.component.option('text', 'Загрузка'));
                    setIsLoaderVisible(true);
                    let interval = setTimeout(() => {
                        setIsLoaderVisible(false);
                    }, 3000);
                    return () => {
                        clearInterval(interval)
                    }
                }}
                text={'Нажми'}
            >
                <LoadIndicator
                    className="button-indicator"
                    visible={isLoaderVisible}
                />
                <span>{isLoaderVisible ? 'Загрузка' : 'Логин' }</span>

            </Button>
        </div>
    );
};
