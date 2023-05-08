import * as React from 'react';
import { Menu, MenuContent, MenuGroup, MenuList, MenuItem, Divider } from '@patternfly/react-core';
import "@patternfly/react-core/dist/styles/base.css";
import "./DormFloorList.css";
import {FC} from "react";
import {IFloor, ISwitch} from "../../../core/models";
import {NavLink} from "react-router-dom";
export const DormSwitch: FC<ISwitch> = ({ name, id}) => {
    return <MenuItem itemId={id}>
        <NavLink to={`/switch/${id}`} replace>
            { name }
        </NavLink>
    </MenuItem>
}

export const DormFloorList: FC<{ floors: IFloor[] }> = ({ floors }) => {
    const [activeItem, setActiveItem] = React.useState<string | number | undefined>();
    const onSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, itemId: string | number | undefined) => {
        console.log(`clicked ${itemId}`);
        setActiveItem(itemId);
    };
// Інтерактивні списки комутаторів із групуванням по поверхам
    return (
        <Menu className="dorm-list" onSelect={onSelect} activeItemId={activeItem}>
            <MenuContent>
                {/*група*/}
                {/*гарна полосочка*/}
                <Divider />
                {floors.map((floor, idx) => {
                    if (!floor?.switches) {
                        return <MenuGroup key={idx}>
                            {/*список елементів групи*/}
                            <MenuList>
                                {/*елемент групи із посиланням на дію\сторінку\тощо*/}
                                <MenuItem to="/switch/central" itemId={0}>
                                    Central
                                </MenuItem>
                            </MenuList>
                        </MenuGroup>
                    }
                    return <MenuGroup label={`Floor ${floor.floorNumber}`} labelHeadingLevel="h3" key={idx}>
                        <MenuList>
                            {floor?.switches && floor?.switches.map((switchItem, idx) =>
                                <DormSwitch key={switchItem.id} {...switchItem} />)}
                        </MenuList>
                    </MenuGroup>
                    }
                )}
            </MenuContent>
        </Menu>
    );
};
