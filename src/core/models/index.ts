//TO EDIT: change both respective properties locally and in core/mocks/dorm-list.json
// id: "111" - right to left: switch, floor, dorm number. Example: dorm21, floor3, switch 3 - id: "2133"
//example:
/**
 *  export interface ISwitch {
        name: string; <-- Removed
        ip: string;
        id: string;
        model: string;
        side: string;
        firmware: string;
    }
    then, in file dorm-list.json:
    .....
        "floorNumber": 1,
        "switches": [
          {
            ("name: ..." removed)
            "model": "Model 1",
            "ip": "1111.111.111.111",
            "side": "Left", "id": "111.1.1",
            "firmware": "1.0.0"
          }
        ]......
     */
//single switch variables
export interface ISwitch {
    name: string;
    ip: string;
    id: string;
    model: string;
    side: string;
    firmware: string;
}
//single floor models
export interface IFloor {
    floorNumber: number;
    switches: ISwitch[];
}
//single dorm properties (add if needed)
export interface IDorm {
    doorName: string;
    floors: IFloor[];
}