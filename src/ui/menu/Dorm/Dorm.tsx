import * as React from 'react';
import { ExpandableSection } from '@patternfly/react-core';
import "@patternfly/react-core/dist/styles/base.css";
import "./Dorm.css";
import {FC} from "react";
import {IDorm} from "../../../core/models";
import {DormFloorList} from "../DormFloorList/DormFloorList";

export const Dorm: FC<IDorm> = (props) => {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const onToggle = (isExpanded: boolean) => {
        setIsExpanded(isExpanded);
    };
    return (
        <ExpandableSection
            className="dorm"
            toggleText={`Гуртожиток ${props.doorName}`}
            onToggle={onToggle}
            isExpanded={isExpanded}
            displaySize="large"
            isWidthLimited
        >
            {props.floors && <DormFloorList floors={props.floors} />}
        </ExpandableSection>
    );
};
