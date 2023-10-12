import {Position} from "@qinetik/anique/utils";
import {type Accessor, For} from "solid-js";
import {NativeSelect} from "@qinetik/anique";

function positionText(position : Position) {
    switch(position){
        case Position.TopLeft:
            return "TopLeft"
        case Position.TopCenter:
            return "TopCenter"
        case Position.TopRight:
            return "TopRight"
        case Position.CenterLeft:
            return "CenterLeft"
        case Position.Center:
            return "Center"
        case Position.CenterRight:
            return "CenterRight"
        case Position.BottomLeft:
            return "BottomLeft"
        case Position.BottomCenter:
            return "BottomCenter"
        case Position.BottomRight:
            return "BottomRight"
    }
}

export function PositionSelector(props : {
    activePosition : Accessor<Position>
    setActivePosition : (position : Position) => void;
}) {
    const positions = [Position.TopLeft, Position.TopCenter, Position.TopRight, Position.CenterLeft, Position.Center, Position.CenterRight, Position.BottomLeft, Position.BottomCenter, Position.BottomRight]

    return (
        <NativeSelect value={props.activePosition()} onChange={(e) => props.setActivePosition(parseInt(e.target.value))}>
            <For each={positions}>
                {position => (
                    <option value={position}>{positionText(position)}</option>
                )}
            </For>
        </NativeSelect>
    )

}