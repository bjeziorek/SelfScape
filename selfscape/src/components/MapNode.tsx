import { Handle, Position } from "@xyflow/react";
import { useCallback } from "react";

export function MapNode({ data, isConnectable }) {
    const onChange = useCallback((evt: { target: { value: any; }; }) => {
        console.log(evt.target.value);
    }, []);

    return (
        <>
        <div style={{border:'solid red 1px'}}>
            <Handle
                type="target"
                position={Position.Left}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable}
            />
            <div>
                Custom Color Picker Node: <strong>{data.color}</strong>
            </div>
            <input
                className="nodrag"
                type="color"
                onChange={data.onChange}
                defaultValue={data.color}
            />
            <Handle
                type="source"
                position={Position.Right}
                isConnectable={isConnectable}
            />
            </div>
        </>
    );
}