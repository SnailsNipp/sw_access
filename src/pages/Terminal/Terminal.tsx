import React, {useEffect, useRef, useState} from "react";
import './Terminal.css';
import {IDorm, ISwitch} from "../../core/models";
import {useParams} from "react-router-dom";
import dormList from "../../core/mocks/dorm-list.json";
// ON ANY OCCASION DO NOT EDIT
// ON ANY OCCASION DO NOT EDIT
// ON ANY OCCASION DO NOT EDIT
// ON ANY OCCASION DO NOT EDIT
// ON ANY OCCASION DO NOT EDIT

const list = dormList as unknown as IDorm[]
export const Terminal = () => {
    const shellinaboxFrameRef = useRef<any>(null);
    const [switchItem, setSwitchItem] = useState<ISwitch | undefined>();
    const { switchId } = useParams();
    useEffect(() => {
        if (switchId) {
            const switches: ISwitch[] = list.flatMap(dorm =>
                dorm.floors.flatMap(floor => floor.switches));
            const foundedSwitch = switches.find(switchItem => switchItem.id === switchId)
            if (foundedSwitch) {
                setSwitchItem(foundedSwitch);
            }
        }
    }, [switchId]);

    // Send input to the Shell In A Box instancontentWindowce
    const sendInput = (command: string) => {
        // Create a message object containing the input string
        return {
            type: 'input',
            data: command
        };
    }

    return <div className="terminal-wrapper">
        <p className="terminal-description">
            <h1><b>To connect to the switch execute:<br/> /bin/bash ./sw_access.sh {switchItem?.id}</b></h1>
        </p>
        {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
        <iframe
            ref={shellinaboxFrameRef}
            className="terminal"
            src="http://localhost:43333/"
            width="100%"
        ></iframe>

    </div>
}
