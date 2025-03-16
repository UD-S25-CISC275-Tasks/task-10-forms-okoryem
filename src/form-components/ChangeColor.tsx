import React, { useState } from "react";
import { FormGroup, FormLabel, FormCheck } from "react-bootstrap";


const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black",
];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(COLORS[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <FormGroup controlId="colorSelect">
                <FormLabel>Change Color</FormLabel>
                {COLORS.map((colorOption) => (
                    <FormCheck
                        key={colorOption}
                        type="radio"
                        name="colorOptions"
                        label={<span style={{ backgroundColor: colorOption}}>{colorOption}</span>}
                        value={colorOption}
                        checked={color === colorOption}
                        onChange={updateColor}
                        inline
                    ></FormCheck>
                ))}
            </FormGroup>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                    color: "black",
                }}
            >
                {color}
            </div>
        </div>      
    );
}
