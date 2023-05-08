import {NavLink, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IDorm, ISwitch} from "../../core/models";
import dormList from "../../core/mocks/dorm-list.json";
import "./SwitchDetails.css";

const list = dormList as unknown as IDorm[];
export const SwitchDetails = () => {
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
    }, [switchId])
    return (
        <div className="sw-info-block">
            IP {switchItem?.ip} <br />
            Name {switchItem?.name} <br />
            Side {switchItem?.side} <br />
            Model {switchItem?.model} <br />
            Firmware {switchItem?.firmware} <br /> <br/>
            <NavLink to='./terminal' state={{ addr_ipv4: switchItem?.ip }}>Navigate to Terminal</NavLink>
        </div>
    )
}