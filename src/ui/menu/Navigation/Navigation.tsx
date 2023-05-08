import React from 'react';
import {Dorm} from "../Dorm/Dorm";
import "./Navigation.css";
import { Menu, MenuContent, MenuList, MenuItem } from '@patternfly/react-core';
import dormList from "../../../core/mocks/dorm-list.json";


const dormElems = dormList;
const Navigation: React.FunctionComponent = () => {

    return (
        <Menu isScrollable className="menu">
            <MenuContent className="menu-content">
                <MenuList className="menu-list">
                    {/*mapping the dropdown dorm lists*/}
                    {dormElems.map((dorm, idx) => {
                        return (<MenuItem key={`navigation-dorm-elem-${idx}`} itemId={0}>
                            {/*data props passed to function*/}
                            <Dorm doorName={dorm.dormName} floors={dorm.floors} />
                        </MenuItem>)
                    })}
                </MenuList>
            </MenuContent>
        </Menu>
    );
};



export default Navigation;