import { useState } from "react";
import data from "../data/data";
import { v4 as uuid } from "uuid";
import ColorBox from "./ColorBox";

export default function ColorBoxesContainer() {
    const initial = new Array(25)
        .fill()
        .map(() => data[Math.floor(Math.random() * data.length)]);
    const [colors /*, setColors*/] = useState(initial);
    // function shuffleColors() {
    //     setColors(new Array(25).fill().map(() => data[Math.floor(Math.random() * data.length)]))
    // }
    return (
        <div className="color-container">
            {colors.map((color) => (
                <ColorBox
                    // uses uuid so javascript won't cry about unique keys.
                    // overkill? yes.
                    key={uuid()}
                    color={color}
                />
            ))}
        </div>
    );
}
